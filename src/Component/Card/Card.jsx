import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Card = ({ cardItems }) => {
    console.log(cardItems);
    return (
        <div className='w-full'>
            <div className="card w-full bg-base-100 shadow-sm h-full p-4 rounded-xl">
                <div className="card-body">
                    <span className={`badge badge-xs  ml-70 font-semibold text-[16px] p-3 
                    ${cardItems.tag === 'popular'
                        ? 'bg-purple-500 text-white'
                        : cardItems.tag === 'new'
                            ? 'bg-green-500 text-white'
                            : 'bg-blue-500 text-white'}`}>{cardItems.tag}</span>
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
                        <button className="btn btn-primary btn-block">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;