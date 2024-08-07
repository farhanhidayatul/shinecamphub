import React, { useState } from 'react';
import './room_chat.css';
import Sidebar from '../component/sidebar';
import Navbar from '../component/navbar';
import Barbox from '../component/barbox';
import BahasaOptionNI from '../component/bahasaOptionNI';

const ForumChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title] = useState('Membership');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div style={{ flexGrow: 1 }}>
        <Navbar />
        <Barbox title={title}/>
        <BahasaOptionNI/>
      </div>
    </div>
  );
};
export default ForumChat;