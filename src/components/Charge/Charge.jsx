// import React from 'react';
import icon from '../../assets/uparrow.png';

const Charge = ({data}) => {
    return (
        <button>
            <div className='flex items-center justify-between py-6 pe-4 border-b border-[#1C2946]'>
            <p><span className="me-2 md:me-12 lg:me-12">{data.no}</span><span>{data.name}</span></p>
            <img src={icon} alt="icon" />
        </div>
        </button>
    );
};

export default Charge;