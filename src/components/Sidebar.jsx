import React from 'react';
import { HomeIcon, UserIcon, LibraryIcon, CollectionIcon } from '@heroicons/react/outline'; 

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-6 text-yellow-500 font-bold text-2xl"></div>
      <ul className="space-y-4">
        <li className="flex items-center p-3 hover:bg-yellow-100">
          <HomeIcon className="h-6 w-6 mr-3" />
          <span>Home</span>
        </li>
        <li className="flex items-center p-3 hover:bg-yellow-100">
          <UserIcon className="h-6 w-6 mr-3" />
          <span>Profile</span>
        </li>
        <li className="flex items-center p-3 hover:bg-yellow-100">
          <LibraryIcon className="h-6 w-6 mr-3" />
          <span>Library</span>
        </li>
        <li className="flex items-center p-3 hover:bg-yellow-100">
          <CollectionIcon className="h-6 w-6 mr-3" />
          <span>Collection</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
