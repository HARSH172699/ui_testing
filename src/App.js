// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Calendar from './components/Calendar';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <TopBar />
        <div className="flex-grow p-6">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default App;
