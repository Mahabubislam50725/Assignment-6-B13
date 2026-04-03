import React, { use } from 'react';
import Card from '../Card/Card';

const Banner3 = ({
    DataPromise
}) => {
       const Data = use(DataPromise);
        // console.log(Data.name);
    return (
        <div>
             <div className='container mx-auto text-center mt-15 space-y-5'>
                <h1 className='font-bold text-7xl'>Premium Digital Tools</h1>
                <p className='text-[#627382] text-[16px] sm:text-[20px] lg:text-[25px]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                <div>
                    <button className="btn btn-outline btn-primary rounded-full text-[14px] sm:text-[16px] font-bold">Products</button>
                    <button className="btn btn-outline btn-primary rounded-full text-[14px] sm:text-[16px] font-bold">Cart (2)</button>
                </div>
            </div>

          <div className='grid grid-cols-3 container mx-auto mt-8 gap-6'>
               {
                Data.map(cardItems => (
               <Card key={cardItems.id}  cardItems={cardItems}></Card>
           ))
       }
          </div>
        </div>
      

       
    );
};

export default Banner3;