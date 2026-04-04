import React from 'react';
import { toast } from 'react-toastify';

const SelectedCard = ({ selectedCard, setSelectedCard }) => {

    let totalPrice = 0;
    selectedCard.forEach(item => totalPrice += item.price);

    const handleRemove = (itemToRemove) => {
        toast.error(`Remove Card ${itemToRemove.name}`)
        setSelectedCard(selectedCard.filter(item => item !== itemToRemove));
    }
    const handleRemoveAll =() => {
        toast.success('All Items Remove')
        setSelectedCard([]);
    }
    return (
        <div className='container mx-auto p-5 space-y-6'>
            <h1 className='font-bold text-6xl'>Your Cart</h1>
            {selectedCard.length === 0 ? 
             <div className='space-y-4 p-6 shadow-lg rounded-4xl'>
                <h1 className='font-bold text-6xl text-center  text-gray-400'>Cart is Empty</h1>
                <p className='font-bold text-3xl text-center text-gray-400' >select a product</p>
             </div>
             : selectedCard.map((cardItems, index) => (
                <div key={index} className='flex items-center justify-between gap-4 shadow-lg p-4 rounded-xl'>
                    <div className='flex items-center gap-4'>
                        <img className='w-16 h-16 bg-purple-400 rounded-full object-cover' src={cardItems.image} alt={cardItems.name} />
                        <div>
                            <h2 className='font-semibold text-2xl'>{cardItems.name}</h2>
                            <p className='font-bold text-xl text-gray-600'>${cardItems.price}</p>
                        </div>
                    </div>
                    <button onClick={() => handleRemove(cardItems)} className='btn btn-error rounded-full'>Remove</button>
                </div>
            ))}
            <div className=' p-4 rounded-xl container mx-auto'>
                <div className=' p-4 rounded-xl flex justify-between items-center '>
                    <h1 className='font-bold text-3xl'>Total:</h1>
                    <p className='font-bold text-2xl'>${totalPrice.toFixed(2)}</p>
                </div>
                <div className='p-5 rounded-4xl '>
                    <button onClick={handleRemoveAll} className='btn btn-primary w-full rounded-full '>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;