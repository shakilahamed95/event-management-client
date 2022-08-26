import React from 'react';

const Specialist = ({specialist}) => {
    const {image, title, des} = specialist;
    return (
        <div>
            <div className="card m-0 w-92 ">
  <div className="card-body">
  <div className="flex">
  <figure>{image}</figure>
    <h2 className="card-title ml-2">{title}</h2>
  </div>
    <p>{des}</p>
  </div>
</div>
        </div>
    );
};

export default Specialist;