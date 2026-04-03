import React from 'react';
import { IoIosRadioButtonOn } from 'react-icons/io';


const Banner1 = () => {
    return (
        <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 p-6 sm:p-10'>
            <div className='Information space-y-5 w-full lg:w-1/2 text-center lg:text-left'>
                <div>
                    <p className='flex items-center justify-center lg:justify-start gap-1 text-[16px] sm:text-[20px] bg-blue-100 rounded-full px-5 py-1 w-fit mx-auto lg:mx-0'><IoIosRadioButtonOn className='text-primary' /> New: AI-Powered Tools Available</p>
                </div>

                <div className='space-y-4'>
                    <h1 className='font-bold text-4xl sm:text-6xl lg:text-7xl'>Supercharge Your <br />Digital Workflow</h1>
                    <p className='text-[#627382] text-[16px] sm:text-[20px] lg:text-[25px]'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.</p>
                </div>
                <div className='flex gap-3 justify-center lg:justify-start'>
                    <button className='btn btn-primary rounded-full text-[14px] sm:text-[16px] font-bold'>Explore Products</button>
                    <button className="btn btn-outline btn-primary rounded-full text-[14px] sm:text-[16px] font-bold">Watch Demo</button>
                </div>

            </div>
            <div className='Image w-full lg:w-1/2'>
                <img className='w-full h-full object-cover shadow-2xl' src="/src/assets/banner.png" alt="" />
            </div> 
        </div>
    );
};

export default Banner1;