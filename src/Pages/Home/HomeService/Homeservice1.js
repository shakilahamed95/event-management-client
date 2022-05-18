import React from 'react';
import party2 from '../../../image/party2.jpg'

const Homeservice1 = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={party2} class="max-w-sm rounded-lg shadow-2xl flex-1" alt='' />
                <div className='flex-1'>
                    <h1 class="text-5xl font-bold">Nonprofit Events</h1>
                    <p class="py-6">Doing good together. Working with nonprofits to amplify their events is part of our passion and a service close to our hearts. We understand the importance of representing your organization’s mission and creating connections with donors that last throughout the year.</p>
                    <button class="btn btn-primary">Services</button>
                </div>
            </div>
        </div>
    );
};

export default Homeservice1;