import React, { useState } from 'react'; // Import useState from React
import { FaBell, FaUser } from 'react-icons/fa'; // Importing FontAwesome icons
import Termsandcondition from './Termsandcondition';
import FAQ from './FAQ';
import Contact from './Contact';

function AboutUs() {
  const [activeTab, setActiveTab] = useState('Terms'); // Fix useState usage
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Terms':
        return <Termsandcondition />;
      case 'FAQ':
        return <FAQ />;
      case 'Contact':
        return <Contact />;
      default:
        return <Termsandcondition />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-[var(--Teal,#378BA6)] text-[18px] font-bold">ABOUT</div>
        <div className="flex items-center space-x-4">
          <FaBell className="text-[var(--Teal,#378BA6)] text-xl cursor-pointer" />
          <FaUser className="text-[var(--Teal,#378BA6)] text-xl cursor-pointer" />
          <span className="text-[var(--Teal,#378BA6)] text-[18px]">Aditya Raj</span>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex space-x-1 text-[var(--Teal,#378BA6)] text-center text-[18px] font-normal leading-[36px]">
        <button
          className={`px-4 py-2 ${activeTab === 'Terms' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
          onClick={() => setActiveTab('Terms')}
        >
          Termsandcondition
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'FAQ' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
          onClick={() => setActiveTab('FAQ')}
        >
          Work Information
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'Contact' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
          onClick={() => setActiveTab('Contact')}
        >
          Bank Information
        </button>
      </div>

      <div className="mt-0 border border-[var(--Teal,#378BA6)] rounded-lg">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default AboutUs;
