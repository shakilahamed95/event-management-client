import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = ({ service }) => {
  const { id, img1, title } = service
  return (
    //   <div id="item1" className="carousel-item w-96 gap-6">
    <div id={`item${id}`} className="carousel-item w-96 gap-6 mx-4">
      <div><img src={img1} className="w-50" />
        <div className="flex justify-center mt-[-6%]">
          <div className='border-l-4 h-12 border-orange-600'></div>
        </div>
        <h2 className='text-2xl text-center mt-4 cursor-pointer hover:text-orange-600'><Link to={`/service/${id}`}>{title}</Link></h2></div>
    </div>
    //   {/* <div id="item2" className="carousel-item w-[800px] mx-20">
    //     <img src="http://demo.ovathemes.com/dvents/wp-content/uploads/2017/06/logo-1.png" className="w-full" />
    //   </div> 
    //   <div id="item3" className="carousel-item w-96">
    //     <img src="http://demo.ovathemes.com/dvents/wp-content/uploads/2017/06/logo-1.png" className="w-full" />
    //   </div> 
    //   <div id="item4" className="carousel-item w-96">
    //     <img src="http://demo.ovathemes.com/dvents/wp-content/uploads/2017/06/logo-1.png" className="w-full" />
    //   </div> */}

    //         // </div>
  );
};

export default SingleEvent;