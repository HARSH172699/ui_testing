import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-700">Dashboard</div>
      <div className="flex items-center space-x-4">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Create Task</button>
        <span className="material-icons text-gray-600">notifications</span>
        <span className="material-icons text-gray-600">account_circle</span>
      </div>
    </header>
  );
};

export default Header;
