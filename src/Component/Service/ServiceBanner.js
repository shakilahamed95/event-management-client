import React from 'react';
import banner from '../../Images/ServiceImages/banner.png'

const ServiceBanner = () => {
    return (
            <div className=' relative'>
             <img className='h-44 lg:h-full' src={banner} alt="" />
           <div className='absolute lg:top-[30%] top-[20%] left-[50%]  lg:ml-[-100px] ml-[-80px]'>
            <div className='flex justify-center'>
            <div className=' border-l-4 h-8 mb-4 border-orange-700'></div>
            </div>
           <h1 className=' text-white text-2xl lg:text-4xl font-bold'>Our services</h1>
           </div>
        </div>
    );
};

export default ServiceBanner;