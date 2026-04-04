
import Card from '../Card/Card';
import AvailableCard from '../AvailableCard/AvailableCard';
import { useState } from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const Banner3 = ({
    DataPromise , selectedCard,setSelectedCard
}) => {

    const [selectedType, setSelectedType] = useState('Available');
    
       
        // console.log(Data.name);
    return (
        <div>
             <div className='container mx-auto text-center mt-15 space-y-5'>
                <h1 className='font-bold text-7xl'>Premium Digital Tools</h1>
                <p className='text-[#627382] text-[16px] sm:text-[20px] lg:text-[25px]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                <div>
                    <button onClick={() => setSelectedType("Available")} className={`btn btn-outline  rounded-full ro text-[14px] sm:text-[16px] font-bold ${selectedType === 'Available' ? "bg-primary text-white" :""}`}>Products</button>
                    <button onClick={() => setSelectedType("Cart")} className={`btn btn-outline  rounded-full  text-[14px] sm:text-[16px] font-bold join-item ${selectedType === 'Cart' ? "bg-primary text-white" :""}`}>Cart ({selectedCard.length})</button>
                </div>
            </div>

            {
                selectedType === 'Available' ? <AvailableCard DataPromise={DataPromise} selectedCard={selectedCard} setSelectedCard={setSelectedCard}></AvailableCard> : <SelectedCard selectedCard={selectedCard} setSelectedCard={setSelectedCard}></SelectedCard>
            }
         
           

         

        </div>
      

       
    );
};

export default Banner3;