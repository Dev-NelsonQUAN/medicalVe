import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        {Icon && <Icon className="text-blue-600 text-4xl mb-4 mx-auto" />}
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
