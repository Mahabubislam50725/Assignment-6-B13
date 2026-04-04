import React, { use } from 'react';
import Card from '../Card/Card';

const AvailableCard = ({ DataPromise }) => {

    const Data = use(DataPromise);
    return (
        <div>
              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  container mx-auto mt-8 gap-6'>
               {
                Data.map(cardItems => (
               <Card key={cardItems.id}  cardItems={cardItems}></Card>
           ))
       }
          </div>

            
        </div>
    );
};

export default AvailableCard;