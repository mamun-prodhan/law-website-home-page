import React from 'react';

const OurTeamCard = ({data}) => {
    return (
        <div className='border'>
            <img className='w-full' src={data.image} alt="" />
            <div className='p-6'>
            <h3 className='text-2xl font-medium text-[#1C2946] mb-4'>{data.name}</h3>
            <p className='text-[#646F85]'>{data.description}</p>
            </div>
        </div>
    );
};

export default OurTeamCard;