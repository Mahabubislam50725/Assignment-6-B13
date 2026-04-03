
import './App.css'
import Banner1 from './Component/Banner/Banner1';
import Banner2 from './Component/Banner/Banner2';
import NavBar from './Component/NavBar/NavBar';

const fatchData = async () => {
  const res = await fetch("/Data.json");
  return res.json();
}

function App() {
  const DataPromise = fatchData();

  return (
    <> 
         <NavBar></NavBar>
         <Banner1></Banner1>
         <Banner2></Banner2>
        {/* <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
         
        </Suspense> */}
    </>
  )
}

export default App
