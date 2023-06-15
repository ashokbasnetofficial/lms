import axios from "axios"
import { useMemo } from "react"
import useSWR from 'swr'
const useFetcher = (baseUrl) => {

    const fetcher = async (url) => {
        try {
            // get response 
            const response = await axios.get(url)
            const data = await response.data;
            return data;
        }
        catch (error) {
            console.log(error)
        }

    }
    const { data, error, isLoading } = useSWR(baseUrl, fetcher);
    return useMemo(() => {
        return {
            isLoading: isLoading,
            data: data || [],
            error: error
        }
    }, [data, error, isLoading])

}
export default useFetcher;