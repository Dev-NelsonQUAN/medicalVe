import React from 'react';
import { useNavigate } from 'react-router-dom';
import userImage from '../../assets/7317107.jpg';

const SignInOptions = () => {
  const navigate = useNavigate();

  const handleSignIn = (role) => {
    navigate(`/${role}-signin`);
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 hidden md:block">
        <img
          src={userImage}
          alt="Sign In"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-blue-500 p-8 ">
        <h2 className="text-3xl font-bold text-white mb-6">Sign In</h2>
        <p className="mb-4 text-white ">Please select your role to sign in:</p>
        <div className="space-y-4">
          <button
            onClick={() => handleSignIn('user')}
            className="w-64 mr-4 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Sign In as User
          </button>
          <button
            onClick={() => handleSignIn('pharmacy')}
            className="w-64 py-2 px-4 bg-white border text-blue-500 rounded-lg shadow-md"
          >
            Sign In as Pharmacy
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInOptions;
