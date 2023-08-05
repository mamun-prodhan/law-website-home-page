// import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import img from '../../assets/mission2.svg';
import img2 from '../../assets/heart2.svg';
import img3 from '../../assets/security2.svg';
import FoundationsCard from "../FoundationsCard/FoundationsCard";

const Foundations = () => {
    const companyData = [
        {
            title: 'Advocacy',
            description: 'We are driven by one thing - securing the best outcomes for our clients. We fight the fight and navigate the maze of law for you.',
            image: img
        },
        {
            title: 'Expertise',
            description: 'We dream of a future where everyone gets the justice they deserve. We are here to make it happen, one case at a time',
            image: img
        },
        {
            title: 'Communication',
            description: 'We stand for fairness, respect, and fierce advocacy. Your rights are our command, your battle is ours.',
            image: img2
        },
        {
            title: 'Perseverance',
            description: 'We exhibit relentless perseverance. No matter how tough the fight gets, we commit ourselves to stand by our clients and fight tirelessly.',
            image: img3 
        },
    ]
    return (
        <div className="my-10 md:my-16 lg:my-32 px-4 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-[15%] mb-6 md:mb-10 lg:mb-0">
            <h2 className="text-xl md:text-2xl text-[#1C2946] font-medium mb-3">Foundations</h2>
            <a href="" className="text-base text-[#3C78F4] flex items-center justify-center lg:justify-start">Contact Us <span className="ms-4"><BsArrowRight/></span></a>
        </div>
        <div className="lg:w-[85%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                companyData.map((data, index) => <FoundationsCard
                data={data}
                key={index}
                ></FoundationsCard>)
            }
        </div>
    </div>
    );
};

export default Foundations;