// import React, { useState, Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, Transition } from '@headlessui/react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';

// const DashboardHeader = ({ pharmacy }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
//       {/* Sidebar Toggle Button */}
//       <button
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//         className="text-gray-500 focus:outline-none"
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//       </button>

//       {/* Pharmacy Name */}
//       <div className="text-lg font-semibold">{pharmacy?.pharmacyName || 'Pharmacy Dashboard'}</div>

//       {/* Profile Dropdown */}
//       <Menu as="div" className="relative inline-block text-left">
//         <div>
//           <Menu.Button className="flex items-center focus:outline-none">
//             <img
//               src={pharmacy?.profile?.image || '/default-profile.png'}
//               alt="Profile"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <ChevronDownIcon className="w-5 h-5 ml-2" />
//           </Menu.Button>
//         </div>

//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none z-50">
//             <div className="px-4 py-3">
//               <p className="text-sm">{pharmacy?.pharmacyName}</p>
//               <p className="text-sm text-gray-500 truncate">{pharmacy?.email}</p>
//             </div>
//             <div className="py-1">
//               <Menu.Item>
//                 {({ active }) => (
//                   <Link
//                     to="/pharmacyDashboard/profile"
//                     className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
//                   >
//                     View Profile
//                   </Link>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <Link
//                     to="/pharmacyDashboard/settings/change-password"
//                     className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
//                   >
//                     Change Password
//                   </Link>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     className={`block w-full text-left px-4 py-2 text-sm text-red-600 ${active ? 'bg-gray-100' : ''}`}
//                     onClick={() => {
//                       // Logout function goes here
//                       console.log('Logging out...');
//                     }}
//                   >
//                     Logout
//                   </button>
//                 )}
//               </Menu.Item>
//             </div>
//           </Menu.Items>
//         </Transition>
//       </Menu>
//     </header>
//   );
// };

// export default DashboardHeader;

import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const DashboardHeader = ({ pharmacy, toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}  // Toggle sidebar on click
        className="text-gray-500 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Pharmacy Name */}
      <div className="text-lg font-semibold">{pharmacy?.pharmacyName || 'Pharmacy Dashboard'}</div>

      {/* Profile Dropdown */}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center focus:outline-none">
            <img
              src={pharmacy?.profile?.image || '/default-profile.png'}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          </Menu.Button>
        </div>

        <Transition>
          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none z-50">
            <div className="px-4 py-3">
              <p className="text-sm">{pharmacy?.pharmacyName}</p>
              <p className="text-sm text-gray-500 truncate">{pharmacy?.email}</p>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/pharmacyDashboard/profile"
                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                  >
                    View Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/pharmacyDashboard/settings/change-password"
                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                  >
                    Change Password
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`block w-full text-left px-4 py-2 text-sm text-red-600 ${active ? 'bg-gray-100' : ''}`}
                    onClick={() => {
                      // Logout function goes here
                      console.log('Logging out...');
                    }}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  );
};

export default DashboardHeader;
