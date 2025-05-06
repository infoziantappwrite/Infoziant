import React from 'react'
import Banner from './Banner/Banner'
import Aiservices from './Aiservices/Aiservices'
import Aimodels from './Aimodels/Aimodels';
import CapabilitySection from './CapabilitySection/CapabilitySection';
import OurApproach from './OurApproach/OurApproach';
import OurProcess from './processSteps/processSteps';
import CaseStudies from './CaseStudies/CaseStudies';
import WhyChooseUs from './WhyChoose';
import FAQSection from './FAQSection/FAQSection';
import ConsultationForm from '../VAPT/ConsultationForm';

const GenAI = () => {
  return (
    <div>
        <Banner/>
        
      <div id="get-started"><Aiservices /></div>
        
        <Aimodels/>
        <CapabilitySection/>
        <OurApproach/>
        <OurProcess />
        <WhyChooseUs />
        <FAQSection />
        <ConsultationForm />
      
    </div>
  )
}

export default GenAI
