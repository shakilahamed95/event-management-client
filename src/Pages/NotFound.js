import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../Images/error.png'

const NotFound = () => {
    return (
        <>
            <div class="hero min-h-screen"
                style={{
                    background: `url(${errorImg})`,
                    backgroundSize: 'cover'
                }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Sorry!</h1>
                        <p class="mb-5 text-2xl">Your Search Result isn't Available</p>
                        <Link className="btn btn-outline w-full max-w-xs my-2 border-green-700" to='/'>Get Home</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;