
import { Suspense } from 'react'
import './App.css'
import Banner1 from './Component/Banner/Banner1';
import Banner2 from './Component/Banner/Banner2';
import Card from './Component/Card/Card';
import NavBar from './Component/NavBar/NavBar';
import Banner3 from './Component/Banner/Banner3';
import AvailableCard from './Component/AvailableCard/AvailableCard';
import StepBanner from './Component/Banner/StepBanner';

const fatchData = async () => {
  const res = await fetch("/Data.json");
  return res.json();
}

const DataPromise = fatchData();

function App() {



  return (
    <> 
        
         
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
         <NavBar></NavBar>
         <Banner1></Banner1>
         <Banner2></Banner2>
         <Banner3 DataPromise={DataPromise}></Banner3>
         <StepBanner></StepBanner>
        
         
        </Suspense>
    </>
  )
}

export default App
