// import React from 'react';
import logo from '../../assets/logo.png';
import banner from '../../assets/banner.png';

const Header = () => {
    return (
        <div className='w-full bg-[#1B2946]'>
            <div className='ps-0 md:ps-14 lg:ps-14 pt-8 md:pt-14 lg:pt-14 pb-3 '>
                <img className='mx-auto md:mx-0 lg:mx-0'  src={logo} alt="logo" />
            </div>
            <div>
                <img className='w-[100%]' src={banner} alt="banner" />
            </div>
        </div>
    );
};

export default Header;