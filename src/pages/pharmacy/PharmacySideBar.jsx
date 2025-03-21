import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome, FaCog, FaMapMarkerAlt, FaUserCog, FaLock,
  FaSignOutAlt, FaChevronDown, FaChevronUp
} from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';

const sideBarData = [
  {
    title: 'PharmacyDashboard',
    icon: <FaHome />,
    link: 'pharmacydashboard/homes'
  },
  {
    title: 'Medicines',
    icon: <GiMedicines />,
    subItems: [
      { title: 'Add Medicine', link: 'add' },
      { title: 'Medicine List', link: 'view' },
      { title: 'Medicine Details', link: 'details' },
    ],
  },
  {
    title: 'Location',
    icon: <FaMapMarkerAlt />,
    subItems: [
      { title: 'Add Location', link: '/pharmacyDashboard/location/add' },
      { title: 'View Locations', link: '/pharmacyDashboard/location/view' },
    ],
  },
  {
    title: 'Profile',
    icon: <FaUserCog />,
    subItems: [
      { title: 'View Profile', link: '/pharmacyDashboard/profile' },
      { title: 'Edit Profile', link: '/pharmacyDashboard/profile/edit' },
    ],
  },
  {
    title: 'Change Password',
    icon: <FaLock />,
    subItems: [
      { title: 'Update Password', link: '/pharmacyDashboard/change-password' },
    ],
  },
  {
    title: 'Settings',
    icon: <FaCog />,
    subItems: [
      { title: 'Preferences', link: '/pharmacyDashboard/settings/preferences' },
      { title: 'Notifications', link: '/pharmacyDashboard/settings/notifications' },
      { title: 'Security', link: '/pharmacyDashboard/settings/security' },
    ],
  },
  {
    title: 'Logout',
    icon: <FaSignOutAlt />,
    link: '/logout',
  },
];

const PharmacysideBarData = ({ user, isSidebarOpen, toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-blue-600 text-white w-64 transform transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative lg:flex lg:flex-col`}
    >
      {/* Brand */}
      <div className="pt-6 text-center">
        <h1 className="text-2xl font-bold">Pharmacy Panel</h1>
      </div>

      <nav className="pt-4">
        <ul className="list-none p-4 space-y-0">
          {sideBarData.map((item, index) => (
            <li key={index}>
              <div
                className={`pl-2 py-3 rounded-md cursor-pointer flex items-center justify-between ${location.pathname === item.link
                    ? 'bg-white text-blue-600'
                    : 'hover:bg-white hover:text-blue-600'
                  }`}
                onClick={() => {
                  if (item.subItems) toggleDropdown(index);
                  else toggleSidebar(); // Close sidebar on link click
                }}
              >
                <div className="flex items-center">
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                {item.subItems &&
                  (openDropdown === index ? (
                    <FaChevronUp className="mr-2" />
                  ) : (
                    <FaChevronDown className="mr-2" />
                  ))}
              </div>

              {/* Dropdown */}
              {item.subItems && openDropdown === index && (
                <ul className="pl-8 mt-2 space-y-2">
                  {item.subItems.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className={`py-2 px-2 rounded-md cursor-pointer ${location.pathname === sub.link
                          ? 'bg-white text-blue-600'
                          : 'hover:bg-white hover:text-blue-600'
                        }`}
                      onClick={toggleSidebar}
                    >
                      <Link to={sub.link}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* User Info */}
      <div className="p-4 mt-auto hidden lg:block">
        <div className="flex items-center space-x-3">
          <div>
            <p className="text-sm">Logged in as:</p>
            <p className="font-semibold">{user?.pharmacyName || 'Pharmacy User'}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PharmacysideBarData;
