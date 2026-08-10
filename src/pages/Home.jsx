import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between">
      <Navbar theme="light" />

      {/* Main Content Canvas */}
      <main className="flex-1 pt-32 pb-16">
        <div className="container-custom">
          {/* Ready for new content */}
        </div>
      </main>

      <Footer theme="light" />
    </div>
  );
}
