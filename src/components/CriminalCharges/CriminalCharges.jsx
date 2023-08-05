// import React from 'react';

import Charge from "../Charge/Charge";


const CriminalCharges = () => {

    const chargesData = [
        {
            no: '01',
            name: 'DRUGS',
        },
        {
            no: '02',
            name: 'FINANCIAL CRIMES',
        },
        {
            no: '03',
            name: 'MEDICAL NEGLIGENCE & MALPRACTICE',
        },
        {
            no: '04',
            name: 'NATIONAL SECURITY CRIMES',
        },
        {
            no: '05',
            name: 'SEX & HUMAN RIGHTS CRIMES',
        },
        {
            no: '06',
            name: 'TRAFFIC OFFENCES',
        },
        {
            no: '07',
            name: 'VIOLENT CRIMES',
        },
        {
            no: '08',
            name: 'OTHERS',
        },
    ]

    return (
        <div className="px-4 md:px-10 lg:px-20 py-10 md:py-16 lg:py-32 bg-[#F7F7F7]">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-center md:text-start  text-[#1C2946] font-medium mb-6 md:mb-10 lg:mb-16">DEFENDING YOUR RIGHTS ACROSS <span className="text-[#3C78F4]">CRIMINAL CHARGES</span></h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
                {
                    chargesData.map((data, index) => <Charge 
                    data={data}
                    key={index}
                    ></Charge>)
                }
            </div>
        </div>
    );
};

export default CriminalCharges;