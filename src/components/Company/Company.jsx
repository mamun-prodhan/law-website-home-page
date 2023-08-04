// import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import img from '../../assets/mission.svg';
import img2 from '../../assets/heart.svg';
import img3 from '../../assets/security.svg';
import CompanyCard from "../CompanyCard/CompanyCard";

const Company = () => {

    const companyData = [
        {
            title: 'Mission',
            description: 'We are driven by one thing - securing the best outcomes for our clients. We fight the fight and navigate the maze of law for you.',
            image: img
        },
        {
            title: 'Vision',
            description: 'We dream of a future where everyone gets the justice they deserve. We are here to make it happen, one case at a time',
            image: img
        },
        {
            title: 'Values',
            description: 'We stand for fairness, respect, and fierce advocacy. Your rights are our command, your battle is ours.',
            image: img2
        },
        {
            title: 'Promise',
            description: 'You are never alone in your journey. We promise to stand beside you, be your voice, and tirelessly work towards justice. ',
            image: img3
        },
    ]

    return (
        <div className="my-10 md:my-16 lg:my-24 px-4 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center">
            <div className="lg:w-[15%] mb-6 md:mb-10 lg:mb-0">
                <h2 className="text-2xl text-[#1C2946] font-medium mb-3">Company</h2>
                <a href="" className="text-base text-[#3C78F4] flex items-center justify-center lg:justify-start">About Us <span className="ms-4"><BsArrowRight/></span></a>
            </div>
            <div className="lg:w-[85%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    companyData.map((data, index) => <CompanyCard
                    data={data}
                    key={index}
                    ></CompanyCard>)
                }
            </div>
        </div>
    );
};

export default Company;