import React from "react";
import { BsArrowRight } from "react-icons/bs";
import team from '../../assets/team.png';
import OurTeamCard from "../OurTeamCard/OurTeamCard";

const OurTeam = () => {

    const companyData = [
        {
            name: 'Akhmed Yakoob',
            description: 'We are driven by one thing - securing the best outcomes for our clients. We fight the fight and navigate the maze of law for you.',
            image: team
        },
        {
            name: 'Liam Dawson',
            description: 'We are driven by one thing - securing the best outcomes for our clients. We fight the fight and navigate the maze of law for you.',
            image: team
        },
        {
            name: 'Richard White',
            description: 'We are driven by one thing - securing the best outcomes for our clients. We fight the fight and navigate the maze of law for you.',
            image: team
        },
        { 
            name: 'Will Smith',
            description: 'We are driven by one thing - securing the best outcomes for our clients. We fight the fight and navigate the maze of law for you.',
            image: team
        },
    ]

  return (
    <div className="my-10 md:my-16 lg:my-32 px-4 md:px-10 lg:px-20 flex flex-col lg:flex-row items-center gap-6">
    <div className="lg:w-[15%] mb-6 md:mb-10 lg:mb-0">
        <h2 className="text-xl md:text-2xl text-center lg:text-start text-[#1C2946] font-medium mb-3">Our team </h2>
        <a href="" className="text-base text-[#3C78F4] flex items-center justify-center lg:justify-start mb-6">See all <span className="ms-4"><BsArrowRight/></span></a>
        <p className="text-center lg:text-start">We are driven by one thing - securing the best outcomes for our clients. We fight the fight and navigate the maze of law for you. We are driven by one thing - securing the best outcomes for our clients. We fight the fight and navigate the maze of law for you.</p>
    </div>
    <div className="lg:w-[85%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
            companyData.map((data, index) => <OurTeamCard
            data={data}
            key={index}
            ></OurTeamCard>)
        }
    </div>
</div>
  );
};

export default OurTeam;
