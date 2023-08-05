import React from 'react';

const DetailsBannerButton = ({data}) => {
    return (
        <button>
        <div className="flex items-center justify-between py-6 pe-4 border-b border-[#1C2946]">
          <p className="text-xl lg:text-2xl font-medium">{data.title}</p>
          <img src={data.icon} alt="icon" />
        </div>
      </button>
    );
};

export default DetailsBannerButton;