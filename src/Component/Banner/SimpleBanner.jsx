import React from 'react';
import { FaCheck } from 'react-icons/fa';

const SimpleBanner = () => {
    return (
        <div className='container mx-auto space-y-4 my-20'>
            <div className='text-center space-y-4 p-6 '>
                <h1 className='font-bold text-6xl'>Simple, Transparent Pricing</h1>
                <p className='font-semibold text-gray-400 text-xl'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    <div className="card w-full bg-base-100 shadow-lg rounded-3xl p-5 h-full">
                        <div className="card-body p-4 flex flex-col justify-between">
                            {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
                      
                          
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">Starter</h2>
                            
                            </div>
                            <div className='space-y-5'>
                                <p className='font-semibold text-gray-400 text-xl'>Perfect for getting started</p>
                                <p className="text-5xl font-bold">$0<span className='text-3xl font-semibold text-gray-400'>/Month</span>
                                </p>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                 <li className='flex items-center gap-2'><FaCheck className='text-green-400' />Access to 10 free tools</li>
                                <li className='flex items-center gap-2 '><FaCheck className='text-green-400' /> Basic templates</li>
                                <li className='flex items-center gap-2'><FaCheck className='text-green-400' /> Community support</li>
                                <li className='flex items-center gap-2'><FaCheck className='text-green-400' /> 1 project per month</li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block rounded-full">Get Started Free</button>
                            </div>
                        </div>
                    </div>


                    <div className="card w-full bg-purple-700 text-white shadow-lg rounded-3xl p-5 h-full">
                        <div className="card-body p-4 flex flex-col justify-between">
                           <div className='text-center mt-[-50px]'>
                             <span className="badge badge-xs badge-warning p-4 text-xl rounded-full ">Most Popular</span>
                           </div>
                      
                          
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">Pro</h2>
                            
                            </div>
                            <div className='space-y-5'>
                                <p className='font-semibold text-gray-400 text-xl'>Best for professionals</p>
                                <p className="text-5xl font-bold">$29<span className='text-3xl font-semibold text-gray-400'>/Month</span>
                                </p>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 h-full text-xs">
                                 <li className='flex items-center gap-2'><FaCheck className='text-green-400' />Access to all premium tools</li>
                                <li className='flex items-center gap-2 '><FaCheck className='text-green-400' /> Unlimited templates</li>
                                <li className='flex items-center gap-2'><FaCheck className='text-green-400' /> Priority support</li>
                                <li className='flex items-center gap-2'><FaCheck className='text-green-400' /> Unlimited projects</li>
                                <li className='flex items-center gap-2'><FaCheck className='text-green-400' /> Cloud sync</li>
                                <li className='flex items-center gap-2'><FaCheck className='text-green-400' /> Advanced analytics</li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn text-purple-500 btn-block rounded-full border border-purple-500">Start Pro Trial</button>
                            </div>
                        </div>
                    </div>


                    <div className="card w-full bg-base-100 shadow-lg rounded-3xl p-5 h-full">
                        <div className="card-body p-4 flex flex-col justify-between">
                            {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
                      
                          
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">Enterprise</h2>
                            
                            </div>
                            <div className='space-y-5'>
                                <p className='font-semibold text-gray-400 text-xl'>For teams and businesses</p>
                                <p className="text-5xl font-bold">$99<span className='text-3xl font-semibold text-gray-400'>/Month</span>
                                </p>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                 <li className='flex items-center gap-2'><FaCheck className='text-green-400' />Everything in Pro</li>
                                <li className='flex items-center gap-2 '><FaCheck className='text-green-400' /> Team collaboration</li>
                                <li className='flex items-center gap-2'><FaCheck className='text-green-400' /> Custom integrations</li>
                                <li className='flex items-center gap-2'><FaCheck className='text-green-400' /> Dedicated support</li>
                                <li className='flex items-center gap-2'><FaCheck className='text-green-400' /> SLA guarantee</li>
                                <li className='flex items-center gap-2'><FaCheck className='text-green-400' />Custom branding</li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block rounded-full">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleBanner;