import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import image from '../../Images/ServiceImages/birthday-1.jpg';
import image2 from '../../Images/ServiceImages/birthday-3.jpg';
import image3 from '../../Images/ServiceImages/birthday-4.jpg';
import image4 from '../../Images/ServiceImages/birthday-4.jpg';
import map from '../../Images/ServiceImages/map-icon.png';
import calendar from '../../Images/ServiceImages/calendar-icon.jpg';

const Service = () => {
    const { id } = useParams({});
    console.log(id)
    const [service, setservice] = useState([]);
    useEffect(() => {
        fetch('serviceData.json')
        .then(res => res.json())
        .then(service => console.log(service))
    }, [])
    return (

        <div className='container px-8 lg:px-36 mt-20'>
            <div className="grid grid-rows-2 lg:grid-flow-col gap-4">
            <div className='row-span-2'>
            <img src={image} className='w-50 shrink-0' alt="" />
            <h3 className='text-3xl font-semibold my-5'>Dance Event</h3>
            <div className='flex gap-2'>
                <img src={calendar} alt="" width={30} /> 
                <p>August 03 2019 , 03 AM - August 03 2019 , 11 PM</p>
                </div>
            <div className='flex gap-2'>
                <img src={map} alt="" width={30} /> 
                <p>32-B, Envato St, Themeforest Ave, CA</p>
                </div>
            <p>Consectetur elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqul enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                Excepteur sint occaecat cupidata non proident sunt in culpa qui officia deserunt mol lit anim id est laborum tempore laboris volputate..</p>
                <div className='my-20'>
                    <h2 className='text-center text-4xl font-semibold mb-10'>Previous Events <span className='text-orange-700'> gellary</span></h2>
                    <div className="grid grid-cols-2 gap-3">
            <img src={image} className='' alt="" />
            <img src={image2} className='' alt="" />
            <img src={image3} className='' alt="" />
            <img src={image4} className='' alt="" />
            </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Service;