
import { Suspense, useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner1 from './Component/Banner/Banner1';
import Banner2 from './Component/Banner/Banner2';
import Card from './Component/Card/Card';
import NavBar from './Component/NavBar/NavBar';
import Banner3 from './Component/Banner/Banner3';
import AvailableCard from './Component/AvailableCard/AvailableCard';
import StepBanner from './Component/Banner/StepBanner';
import SimpleBanner from './Component/Banner/SimpleBanner';
import Footer from './Component/Banner/Footer';

const fatchData = async () => {
  const res = await fetch("/Data.json");
  return res.json();
}

const DataPromise = fatchData();

function App() {


const [selectedCard, setSelectedCard] = useState([]);
  return (
    <> 
        
         
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
         <NavBar selectedCard={selectedCard} setSelectedCard={setSelectedCard}></NavBar>
         <Banner1></Banner1>
         <Banner2></Banner2>
         <Banner3 DataPromise={DataPromise} selectedCard={selectedCard} setSelectedCard={setSelectedCard}></Banner3>
         <StepBanner></StepBanner>
         <SimpleBanner></SimpleBanner>
         <Footer></Footer>
         <ToastContainer></ToastContainer>
        
         
        </Suspense>
    </>
  )
}

export default App
