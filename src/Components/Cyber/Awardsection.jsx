
import React, { useEffect, useState } from 'react';
import './css/Awardsection.css';

const logos = [
    { name: 'avans', imageUrl: './assets/avans.jpg' },
    { name: 'Mfils', imageUrl: './assets/Mfiles.jpeg' },
    { name: 'zivame', imageUrl: './assets/zivame.png' },
    { name: 'media',  imageUrl: './assets/mediatek.jpg' },
    { name: 'bbc', imageUrl: './assets/BBC.png' },
    { name: 'htc',  imageUrl: './assets/HTC.avif' },
  { name: 'Google',  imageUrl: './assets/mic.png' },
  { name: 'Facebook', imageUrl: './assets/sony.png' },
  { name: 'Microsoft',  imageUrl: './assets/zoho.png' },
  { name: 'Amazon', imageUrl: './assets/wu.png' },
  { name: 'Issuu',imageUrl: './assets/issuu.png' },
  { name: 'InVision', role: 'Design', imageUrl: './assets/invision.png' },
  { name: 'Chalk', imageUrl: './assets/chalk.png' },
  { name: 'Blackberry',imageUrl: './assets/blackberry.png' },
  { name: 'Dell',  imageUrl: './assets/dell.png' },
  { name: 'Fastmail',  imageUrl: './assets/fastmail.png' },
  { name: 'SAP', imageUrl: './assets/sap.png' },
  { name: 'Google',  imageUrl: './assets/Google.png' },
  { name: 'Genie',  imageUrl: './assets/genieBelt.png' },
  { name: 'techwarm', imageUrl: './assets/techworm.png' },

];

const Awardsection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the time as needed for auto-scroll (3000ms = 3 seconds)
    return () => clearInterval(interval);
  }, []);

  const getLogoClass = (index) => {
    if (index === currentIndex) {
      return 'logo center-logo';
    } else if (index === (currentIndex + 1) % logos.length) {
      return 'logo right-fade';
    } else if (index === (currentIndex - 1 + logos.length) % logos.length) {
      return 'logo left-fade';
    }
    return 'logo hidden';
  };

  return (
       <div className="Award-Container-section">
       <h1>
       Honors and Recognitions
         </h1>
         <p>Honored by Top Companies for Our Commitment to Innovation and Quality</p>
    <div className="award-slider">
    
      {logos.map((logo, index) => (
        <div key={index} className={getLogoClass(index)}>
          <img src={logo.imageUrl} alt={logo.name} />
          {/* <div className="logo-details">
            <h4>{logo.name}</h4>
            <p>{logo.role}</p>
          </div> */}
        </div>
      ))}
    
    </div>
    </div>
  );
};

export default Awardsection;