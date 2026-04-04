import React from 'react';
import userImg from '../../assets/user.png';
import packageImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png';

const StepBanner = () => {
    return (
        <div className='container mx-auto my-20 space-y-3.5 '>
            <div className='text-center space-y-3 p-6'>
                <h1 className='font-bold text-7xl'>Get Started in 3 Steps</h1>
                <p className='font-semibold text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <div className="card bg-base-100 w-full shadow-lg rounded-3xl mb-8 space-y-3">
                        <div className="text-right p-4">
                            <button className="btn btn-primary rounded-full">1</button>
                        </div>
                        <figure className="px-10 p-5">
                            <img src={userImg} alt="user" className="rounded-full p-5 bg-purple-300" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-4xl">Create Account</h2>
                            <p className='text-gray-400 font-semibold text-xl'>Sign up for free in seconds. No credit card required to get started.</p>

                        </div>
                    </div>
                </div>


                <div>
                    <div className="card bg-base-100 w-full shadow-lg rounded-3xl mb-8 space-y-3">
                        <div className="text-right p-4">
                            <button className="btn btn-primary rounded-full p-4">2</button>
                        </div>
                        <figure className="px-10 p-5">
                            <img src={packageImg} alt="package" className="rounded-full p-5 bg-purple-300" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-4xl">Choose Products</h2>
                            <p className='text-gray-400 font-semibold text-xl'>Browse our catalog and select the tools that fit your needs..</p>

                        </div>
                    </div>
                </div>



                <div>
                    <div className="card bg-base-100 w-full shadow-lg rounded-3xl mb-8 space-y-3">
                        <div className="text-right p-4">
                            <button className="btn btn-primary rounded-full p-4">3</button>
                        </div>
                        <figure className="px-10 p-4 w-full">
                            <img src={rocketImg} alt="rocket" className="rounded-full p-5 bg-purple-300" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-4xl">Start Creating</h2>
                            <p className='text-gray-400 font-semibold text-xl'>Download and start using your premium tools immediately.</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StepBanner;