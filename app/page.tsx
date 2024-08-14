"use client";
import React, { useState } from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import Navigation from './navigation/Navigation'

import Bai1 from './baitap/Bai1'
import Bai2 from './baitap/Bai2'
import FormLogin from './baitap/Bai3';
import FormRegister from './baitap/Bai4';
import Popup from './baitap/Bai5';
import Navigation1 from './baitap/Bai6';
export default function page() {
  const options = [
    { label: 'Label ', checked: true },
    { label: 'Label ', checked: false },
    { label: 'Label ', checked: false },
    { label: 'Label ', checked: true },
  ];

  const handleApply = (selectedOptions: { label: string; checked: boolean }[]) => {
    console.log('Chon:', selectedOptions);
  };

  const handleClear = () => {
    console.log('Xoa');
  };


  const [showPopup, setShowPopup] = useState(false);
  const handleDelete = () => {
    console.log("Deleted");
    setShowPopup(false);
  };

  
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <Navigation></Navigation>


      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p>Bai 1:</p>
        <head>
          <link rel="icon" href="#" />
        </head>

        <main className="bg-white p-6 rounded-lg shadow-lg w-96">
          <Bai1
            label="Label"
            placeholder="Placeholder"
            helperText="Helper Text"
            icon="/baitap/eye.svg">
          </Bai1>
        </main>
     </div>
     
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      Bai 2:<Bai2 label="Input Label" options={options} onApply={handleApply} onClear={handleClear} />
    </div>
    <div>
      Bai 3:<FormLogin />
    </div>
    <div>
      Bai 4:<FormRegister />
    </div>

    <div>
      Bai 5:
      <button onClick={() => setShowPopup(true)}>Show Popup</button>
      {showPopup && (
        <Popup
          message="Xoa nhe."
          onCancel={() => setShowPopup(false)}
          onDelete={handleDelete}
        />
      )}
      <div>
        Bai 6:
      <Navigation1 />
      </div>
    </div>
  </div>  
  )
}
