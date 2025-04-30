import React from 'react'
import Banner from './Banner/Banner'
import Trusted from './Trustedby/Trusted'
import Transformative from './Transformative/Transformative'
import ChecksSection from './ChecksSection'
import ChallengesSolutionsSection from './ChallengesSolutionsSection'
import TestingApproach from './TestingApproach'
import InsightsSection from './InsightsSection'
import WhyChooseUs from './WhyChooseUs'
import FAQSection from './FAQSection'
import ConsultationForm from '../../VAPT/ConsultationForm'

const LLM = () => {
  return (
    <div>
      <Banner />
      <Trusted />
      <Transformative />  
      <ChecksSection />
      <ChallengesSolutionsSection />
      <TestingApproach />
      <InsightsSection />
      <WhyChooseUs />
      <FAQSection />
      <ConsultationForm />
    </div>
  )
}

export default LLM
