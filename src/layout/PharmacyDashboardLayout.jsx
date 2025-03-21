import React, { useState } from 'react';
import SideBar from '../pages/pharmacy/PharmacySideBar';
import DashboardHeader from '../pages/pharmacy/PharmacyDashboardHeader';
import { Outlet } from 'react-router-dom';

const PharmacyDashboard = ({ pharmacy }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar open/close
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 z-50 transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <div className="fixed w-full z-30">
          <DashboardHeader pharmacy={pharmacy} toggleSidebar={toggleSidebar} />
        </div>

        {/* Push content down below header */}
        <div className="pt-16 flex-1 flex">
          {/* Main Content Area */}
          <main className="flex-1 ml-0 lg:ml-64 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDashboard;

