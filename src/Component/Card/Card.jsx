import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({ cardItems ,selectedCard,setSelectedCard }) => {
    
    const [isBuying, setIsBuying] = useState(false);

    const handleBuyNow = () => {
        
        toast.success(`You have selected ${cardItems.name} for purchase!`);
        setIsBuying(true);
        setSelectedCard([...selectedCard, cardItems]);
        console.log(selectedCard);

    }
    return (
        <div className='w-full'>
            <div className="card w-full bg-base-100  h-full p-4 rounded-xl shadow-xl">
                <div className="card-body">
                    <div className='text-right'>
                        <span className={`badge badge-xs font-semibold text-[16px] p-3 
                                ${cardItems.tag === 'popular'
                                ? 'bg-purple-500 text-white'
                                : cardItems.tag === 'new'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-blue-500 text-white'}`}>{cardItems.tag}</span>
                    </div>
                    <img className='w-10 rounded-full' src={cardItems.image} alt={cardItems.name} />
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold">{cardItems.name}</h2>

                    </div>
                    <div className='space-y-3'>
                        <p>{cardItems.description}</p>
                        <span className="text-2xl font-bold">${cardItems.price}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs h-full">
                        {
                            cardItems.features.map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <FaCheck className='text-green-500' /> {item}
                                </li>
                            ))
                        }
                    </ul>
                    <div className="mt-6">
                        <button onClick={handleBuyNow} disabled={isBuying} className={`btn btn-primary btn-block rounded-full ${isBuying ? 'bg-green-500' : 'bg-blue-500'}`}>{isBuying ? "Add to Cart" : "Buy Now"}</button>
                        
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Card;