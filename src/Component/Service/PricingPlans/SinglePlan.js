import React from 'react';

const SinglePlan = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-8'>
            <div className=''>
                {/* avatar component */}
                <div class="avatar flex justify-center">
                    <div class="w-[150px] h-[150px] rounded-full ring ring-white ring-offset-base-100 bg-zinc-500 ring-offset-4 mb-[-80px]">
                        <div className='flex justify-center items-center h-full text-white'>
                            <div>
                                <h4>Starts from</h4>
                                <h2 className='text-center text-2xl'>$200</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---- pricing section ---- */}
                <div className='h-[500px] border-2 rounded-tl-lg rounded-br-lg border-gray-100 text-center'>
                    <div className='my-28'>
                        <h2 className='text-2xl font-semibold'>STANDARD</h2>
                        <p className='italic text-gray-500'>Ideal for Proposals, Birthdays</p>
                        <div className=' border-t-2 border-zinc-300 w-92 mx-10 my-4'></div>
                        <div className=' font-bold text-gray-500 leading-10'>
                            <h6>2 Days Event</h6>
                            <h6>Full Services Consultation</h6>
                            <h6>Breakfast & Lunch for Everyone</h6>
                            <h6>FREE Gifts for Kidsd</h6>
                        </div>
                        <button class="btn btn-outline btn-secondary mt-8 rounded-full">Glass button</button>
                    </div>
                </div>
            </div>
            <div className=''>
                {/* avatar component */}
                <div class="avatar flex justify-center">
                    <div class="w-[150px] h-[150px] rounded-full ring ring-white ring-offset-base-100 bg-orange-600 ring-offset-4 mb-[-80px]">
                        <div className='flex justify-center items-center h-full text-white'>
                            <div>
                                <h4>Starts from</h4>
                                <h2 className='text-center text-2xl'>$200</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---- pricing section ---- */}
                <div className='h-[500px] border-2 border-white rounded-tl-lg rounded-br-lg bg-gray-100 text-center'>
                    <div className='my-28'>
                        <h2 className='text-2xl font-semibold'>STANDARD</h2>
                        <p className='italic text-gray-500'>Ideal for Proposals, Birthdays</p>
                        <div className=' border-t-2 border-zinc-300 w-92 mx-10 my-4'></div>
                        <div className=' font-bold text-gray-500 leading-10'>
                            <h6>2 Days Event</h6>
                            <h6>Full Services Consultation</h6>
                            <h6>Breakfast & Lunch for Everyone</h6>
                            <h6>FREE Gifts for Kidsd</h6>
                        </div>
                        <button class="btn btn-outline btn-secondary mt-8 rounded-full">Glass button</button>
                    </div>
                </div>
            </div>
            <div className=''>
                {/* avatar component */}
                <div class="avatar flex justify-center">
                    <div class="w-[150px] h-[150px] rounded-full ring ring-white ring-offset-base-100 bg-zinc-500 ring-offset-4 mb-[-80px]">
                        <div className='flex justify-center items-center h-full text-white'>
                            <div>
                                <h4>Starts from</h4>
                                <h2 className='text-center text-2xl'>$200</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---- pricing section ---- */}
                <div className='h-[500px] border-2 rounded-tl-lg rounded-br-lg border-gray-100 text-center'>
                    <div className='my-28'>
                        <h2 className='text-2xl font-semibold'>STANDARD</h2>
                        <p className='italic text-gray-500'>Ideal for Proposals, Birthdays</p>
                        <div className=' border-t-2 border-zinc-300 w-92 mx-10 my-4'></div>
                        <div className=' font-bold text-gray-500 leading-10'>
                            <h6>2 Days Event</h6>
                            <h6>Full Services Consultation</h6>
                            <h6>Breakfast & Lunch for Everyone</h6>
                            <h6>FREE Gifts for Kidsd</h6>
                        </div>
                        <button class="btn btn-outline btn-secondary mt-8 rounded-full">Glass button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePlan;