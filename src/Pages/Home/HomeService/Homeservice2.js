import React from 'react';
import party2 from '../../../image/party1.jpg'

const Homeservice2 = () => {
    return (
        <div class="hero min-h-screen lg:mt-[-320px]">
            <div class="hero-content flex-col lg:flex-row">
                <img src={party2} class="max-w-sm rounded-lg shadow-2xl flex-1" alt='' />
                <div className='flex-1'>
                    <h1 class="text-5xl font-bold">Event Planning + Design</h1>
                    <p class="py-6">A celebration of collaboration. Our partnership starts with an intensive one-on-one consultation to help us understand the vision for your big day or important event. From there, we create a plan customized to your concept. On event day, we’ll manage every last logistic and nosey-guest-question, or hand things off to you or your team depending on needs and budget.</p>
                    <button class="btn btn-primary">Services</button>
                </div>
            </div>
        </div>
    );
};

export default Homeservice2;