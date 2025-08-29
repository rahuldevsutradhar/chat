import React from 'react'
import Userlist from '../Components/Userlist';
import MassageBox from '../Components/MassageBox';


const Home=()=> {
  return (
    <div className="h-screen bg-[#ECFAE5] p-4 ">
      <div className="mx-auto h-full max-w-6xl">
        {/* 1 col on mobile, 2 cols (1/2 + 1/2) on md+ */}
        <div className="grid h-full grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: UserList */}
          <section className="flex flex-col min-h-0">
            
            <Userlist/>
          </section>

          {/* Right: MessageBox */}
          <section className="flex flex-col min-h-0">        
            <MassageBox/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home