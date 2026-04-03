import React from 'react';

const Banner2 = () => {
    return (
        <div className='bg-primary text-white p-10 flex flex-col lg:flex-row gap-20 justify-around items-center mt-10 '>
            <div className='space-y-2'>
               <h1 className='text-6xl font-bold'>50K+</h1>
               <p className='text-2xl font-semibold text-gray-400'>Active Users</p>
            </div>

            <div className="divider lg:divider-horizontal before:bg-white after:bg-white"></div>
   

            <div className='space-y-2'>
               <h1 className='text-6xl font-bold'>200+</h1>
               <p className='text-2xl font-semibold text-gray-400'>Premium Tools</p>
            </div>

             <div className="divider lg:divider-horizontal before:bg-white after:bg-white"></div>


            <div className='space-y-2'>
               <h1 className='text-6xl font-bold'>4.9</h1>
               <p className='text-2xl font-semibold text-gray-400'>Rating</p>
            </div>


        </div>
    );
};

export default Banner2;