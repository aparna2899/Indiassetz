import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

const navigation = [
  { name: 'Dashboard', href: '#', icon: 'dashboard.png', current: false },
  { name: 'Leads', href: '#', icon: 'leads.png', current: false },
  { name: 'Clients', href: '#', icon: 'clients.png', current: true },
  { name: 'Properties', href: '#', icon: 'properties.png', current: false },
  { name: 'Orders', href: '#', icon: 'orders.png', current: false },
  { name: 'Callback', href: '#', icon: 'callback.png', current: false },
  { name: 'Payments', href: '#', icon: 'payments.png', current: false },
  { name: 'IA- AI', href: '#', icon: 'ia-ai.png', current: false },
  { name: 'Red Box', href: '#', icon: 'red-box.png', current: false }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="md:fixed md:inset-y-0 md:flex md:w-56 md:flex-col lg:h-5/6 block ">
      <div className="flex flex-grow flex-col overflow-y-auto border-gray-200 bg-white pt-5 shadow-2xl lg:rounded-r-[40px]">
        <div className="flex flex-shrink-0 items-center justify-between px-4 py-3">
          <img className="max-[640px]:w-1/4 sm:w-1/4 lg:w-2/3 " src="logo.png" alt="Indiassetz" />
          <button
            className="text-gray-500 focus:text-gray-600 hover:text-gray-600 focus:outline-none lg:hidden"
            onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 5h16M4 12h16M4 19h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="mt-5 mx-6 px-2 pb-12 space-y-1 flex flex-grow flex-col max-[640px]:h-screen max-[640px] sm:h-screen md:h-screen">
            <nav className="flex-1 border-t border-t-lightgray">
              {navigation.map((item) => (
                <NavItem key={item.name} {...item} />
              ))}
            </nav>
            <div className="px-2 py-2 flex items-center cursor-pointer hover:bg-slate-200 hover:rounded-md">
              <div className="w-4">
                <img src="logout.png" className="w-full" />
              </div>
              <a className="ml-4 text-red">Log out</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  navigation: PropTypes.array
};

export default Navbar;
