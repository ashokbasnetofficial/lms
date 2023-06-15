
import './App.css';
import TopBar from './Component/topBar/TopBar';
import useFetcher from './Hooks/useFetcher';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
function App() {
 const {data,error,isLoading} =useFetcher('https://fakestoreapi.com/users')
 console.log(isLoading)
 return (
     <div className="container bg-black">
      <TopBar/>
     </div>
  );
}

export default App;
