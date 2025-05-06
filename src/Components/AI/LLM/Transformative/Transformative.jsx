import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import sampleGif from '../../../../assests/Images/Ourservice/GenAI/llm_transform.jpg'; // Adjust path as needed

const Transformative = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' }); // remove `once: true`
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlsLeft.start({ opacity: 1, x: 0, transition: { duration: 1 } });
      controlsRight.start({ opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } });
    } else {
      controlsLeft.start({ opacity: 0, x: -60, transition: { duration: 0.5 } });
      controlsRight.start({ opacity: 0, x: 60, transition: { duration: 0.5 } });
    }
  }, [isInView, controlsLeft, controlsRight]);

  return (
    <div
    ref={ref}
    className="flex flex-col md:flex-row items-start justify-start py-16 px-4 sm:px-6 md:px-12 bg-gray-900 text-gray-100 overflow-hidden"
  >
      {/* Left Image with animation */}
      <motion.div
        animate={controlsLeft}
        initial={{ opacity: 0, x: -60 }}
        className="w-full md:w-[30%] px-4 md:px-0 flex justify-center"
      >
       <img
  src={sampleGif}
  alt="Team working"
  className="w-full max-w-[90%] h-auto max-h-[350px] object-contain shadow-lg rounded"
/>
      </motion.div>

      {/* Right Text with animation */}
      <motion.div
        animate={controlsRight}
        initial={{ opacity: 0, x: 60 }}
        className="w-full md:w-[60%] mt-6 md:mt-0 px-4 sm:px-6 md:px-0 text-center md:text-left"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#15f5b9] to-[#002aff] bg-clip-text text-transparent">
            Transformative Testing
          </span>{' '}
          for Advanced AI & LLM Models
        </h2>

        <p className="text-gray-300 mb-4 text-left text-justify">
        Unlike conventional systems that have predefined behaviors and expected outcomes, AI models and LLMs 
        generate responses that are dynamic, less predictable, and more complex to test. This inherent complexity requires innovative 
        testing strategies that go beyond traditional methods to mitigate potential issues before they impact real-world applications. So we have 
        tailored an approach to address these unique challenges and ensure that your AI & LLM models are ready for the real world.
        </p>

        <p className="text-gray-300 mb-4 text-left text-justify">
        The accuracy of outputs will play a great part in the success of any AI model. We focus on preventing 
        hallucinations that cause the model to generate incorrect or nonsensical information. Likewise, it is equally important 
        to optimize response times to deliver a seamless and responsive user experience. Additionally, we ensure the prevention 
        of data leakage by implementing stringent testing protocols to protect sensitive information and comply with data privacy standards.
        </p>

        <p className="text-gray-300 text-left text-justify">
        Our commitment to continuous learning & improvement will pave the path for our testing strategies to 
        evolve as these models evolve and adapt to new data, environments, and requirements. By partnering with us, 
        you will have a trusted ally to maximize the value and impact of your AI and LLM initiatives.
        </p>
      </motion.div>
    </div>
  );
};

export default Transformative;
