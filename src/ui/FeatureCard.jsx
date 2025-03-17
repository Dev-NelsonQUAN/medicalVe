import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center h-[100%]">
        {Icon && <Icon className="text-blue-600 text-4xl mb-4 mx-auto" />}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="max-lg:text-[15px] max-md:text-[14px]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
