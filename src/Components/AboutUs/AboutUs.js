import React, { useState } from 'react'; // Import useState from React
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
    <div className="max-w-5xl mx-auto mt-10">
      

      {/* Tabs Section */}
      <div className="flex space-x-1 text-[var(--Teal,#378BA6)] text-center text-[18px] font-normal leading-[36px] ">
        <button
          className={`px-4 py-2 w-[208px] ${activeTab === 'Terms' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
          onClick={() => setActiveTab('Terms')}
        >
          Terms & Conditions
        </button>
        <button
          className={`px-4 py-2 w-[208px] ${activeTab === 'FAQ' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
          onClick={() => setActiveTab('FAQ')}
        >
          FAQ
        </button>
        <button
          className={`px-4 py-2 w-[208px] ${activeTab === 'Contact' ? 'bg-white text-[var(--Teal,#378BA6)] border border-[var(--Teal,#378BA6)] rounded-t-xl font-bold' : 'bg-[#EAF1F3] rounded-t-xl'}`}
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
