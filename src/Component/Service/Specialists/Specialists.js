import React from 'react';
import Specialist from './Specialist';
import image from '../../../Images/ServiceImages/icon.jpg';

const Specialists = () => {
    const specialists = [
        {
            id: 1,
            image: <img src={image} width={50} alt="spacilty" />,
            title: 'Anniversaries',
            des: 'Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
        },
        {
            id: 2,
            image: <img src={image} width={50} alt="spacilty" />,
            title: 'Anniversaries',
            des: 'Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
        },
        {
            id: 3,
            image: <img src={image} width={50} alt="spacilty" />,
            title: 'Anniversaries',
            des: 'Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
        },
        {
            id: 4,
            image: <img src={image} width={50} alt="spacilty" />,
            title: 'Anniversaries',
            des: 'Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
        },
        {
            id: 5,
            image: <img src={image} width={50} alt="spacilty" />,
            title: 'Anniversaries',
            des: 'Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
        },
        {
            id: 6,
            image: <img src={image} width={50} alt="spacilty" />,
            title: 'Anniversaries',
            des: 'Aorem ipsum dolor sit amet consectetur elit sed lusm tempor incididunt ut labore et dolore mag aliqua enima minim veniam quis nostrud exercitation',
        },
    ]
    return (
        <div className='container px-8 lg:px-36 mt-32'>
            <h2 className='text-center text-4xl font-semibold'>The <span className='text-orange-600'>Event Management</span> Specialists</h2>
            <h4 className='text-center text-xl my-8'>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We <br /> offer full range of Events Management Services that scale to your needs & budget.</h4>
           <div className='grid lg:grid-cols-3'>
           {
                specialists.map(item => <Specialist key={item.id} specialist={item}></Specialist>)
            }
           </div>

        </div>
    );
};

export default Specialists;