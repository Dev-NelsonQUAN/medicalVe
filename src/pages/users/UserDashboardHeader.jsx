import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { useSelector } from 'react-redux'; 

const UserDashboardHeader = () => {
    const user = useSelector((state) => state.medGet.user); 
    let firstName = '';

    if (user && user.fullname) {
        const nameParts = user.fullname.split(' ');
        firstName = nameParts[0];
    }

    return (
        <div className="bg-white p-4 flex justify-between items-center">
            <div>
                <h2 className="text-lg font-semibold">
                    Welcome, {firstName ? firstName : 'User'}
                </h2>
                <p className="text-sm text-gray-500">
                    Here's your dashboard overview.
                </p>
            </div>
            <div className="ml-4">
                <div className="bg-blue-600 rounded-full p-2">
                    <CgProfile className="text-white text-lg" />
                </div>
            </div>
        </div>
    );
};

export default UserDashboardHeader;