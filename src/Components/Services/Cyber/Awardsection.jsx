
import React, { useEffect, useState } from 'react';
import './css/Awardsection.css';

const logos = [
    { name: 'avans', imageUrl: '../../../assests/avans.jpg' },
    { name: 'Mfils', imageUrl: '../../../assests/Mfiles.jpeg' },
    { name: 'zivame', imageUrl: '../../../assests/zivame.png' },
    { name: 'media',  imageUrl: '../../../assests/mediatek.jpg' },
    { name: 'bbc', imageUrl: '../../../assests/BBC.png' },
    { name: 'htc',  imageUrl: '../../../assests/HTC.avif' },
  { name: 'Google',  imageUrl: '../../../assests/mic.png' },
  { name: 'Facebook', imageUrl: '../../../assests/sony.png' },
  { name: 'Microsoft',  imageUrl: '../../../assests/zoho.png' },
  { name: 'Amazon', imageUrl: '../../../assests/wu.png' },
  { name: 'Issuu',imageUrl: '../../../assests/issuu.png' },
  { name: 'InVision', role: 'Design', imageUrl: '../../../assests/invision.png' },
  { name: 'Chalk', imageUrl: '../../../assests/chalk.png' },
  { name: 'Dell',  imageUrl: '../../../assests/dell.png' },
  { name: 'Fastmail',  imageUrl: '../../../assests/fastmail.png' },
  { name: 'SAP', imageUrl: '../../../assests/sap.png' },
  { name: 'Google',  imageUrl: '../../../assests/google.png' },
  { name: 'Genie',  imageUrl: '../../../assests/genieBelt.png' },
  { name: 'techwarm', imageUrl: '../../../assests/techworm.png' },

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