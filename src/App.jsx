
import './App.css'
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
        {/* <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
         
        </Suspense> */}
    </>
  )
}

export default App
