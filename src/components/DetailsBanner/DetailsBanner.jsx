import React from 'react';
import img from '../../assets/banner2.png';
import plusIcon from '../../assets/add.png';
import DetailsBannerButton from '../DetailsBannerButton/DetailsBannerButton';

const DetailsBanner = () => {

    const optionsData = [
        {
            title: 'DETERMINATION',
            icon: plusIcon 
        },
        {
            title: 'EXCELLENCE',
            icon: plusIcon 
        },
        {
            title: 'PERSISTENCE',
            icon: plusIcon 
        },
        {
            title: 'SOLIDARITY',
            icon: plusIcon 
        },
    ]

    return (
        <div className="my-10 md:my-16 lg:my-32 px-4 md:px-10 lg:px-20 flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-16 lg:gap-60">
            <div className='flex-1'>
                <img src={img} alt="" />
            </div>
            <div className='flex-1 text-[#000]'>
                <p className='text-xl lg:text-2xl mb-4 md:mb-10 lg:mb-16'>Our Comprehensive and Strategic Approach to Defending Your Rights and Achieving the Best Possible Outcome in Your Case.</p>
                <div className='grid grid-cols-1'>
                {
                    optionsData.map((data, index)=> <DetailsBannerButton
                    data={data}
                    key={index}
                    ></DetailsBannerButton>)
                }
                </div>

            </div>
        </div>
    );
};

export default DetailsBanner;