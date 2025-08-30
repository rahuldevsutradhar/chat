import React from 'react';
import Userlist from '../Components/Userlist';
import MassageBox from '../Components/MassageBox';
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <div className="h-screen bg-[#ECFAE5] p-4">
      <div className="mx-auto h-full max-w-6xl">
        <div className="grid h-full grid-cols-1 md:grid-cols-2 gap-4">
          
          <section className="flex flex-col min-h-0">
            <div className="flex h-full flex-col md:flex-row gap-4">
              <div className="md:w-10 flex-shrink-0">
                <Navbar />
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <Userlist />
              </div>
            </div>
          </section>

          <section className="flex flex-col min-h-0">
            <MassageBox />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
