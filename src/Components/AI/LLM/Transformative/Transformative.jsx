import React from 'react';

const Transformative = () => {
    return (
        <div className="flex flex-col md:flex-row items-start justify-start py-16 bg-gray-900 text-gray-100">
            {/* Left Image Container - 30% */}
            <div className="w-full md:w-[30%] pl-[10%]">
                <img
                    src="https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-ee81cca/codoid.com/wp-content/uploads/2024/08/Transformative-Testing-for-Advanced-AI-LLM-Models.png"
                    alt="Team working"
                    className="w-[90%] h-auto shadow-lg rounded"
                />
            </div>

           {/* Right Text Content - 70% on desktop, full with spacing on mobile */}
<div className="w-full md:w-[60%] mt-6 md:mt-0 px-4 sm:px-6 md:px-0 text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
        <span className="bg-gradient-to-r from-[#15f5b9] to-[#002aff] bg-clip-text text-transparent">
            Transformative Testing
        </span>{' '}
        for Advanced AI & LLM Models
    </h2>

    <p className="text-gray-300 mb-4">
        Unlike conventional systems that have predefined behaviors and expected outcomes, AI models and LLMs
        generate responses that are dynamic, less predictable, and more complex to test. This inherent
        complexity requires innovative testing strategies that go beyond traditional methods to mitigate
        potential issues before they impact real-world applications. So we have tailored an approach to
        address these unique challenges and ensure that your AI & LLM models are ready for the real world.
    </p>

    <p className="text-gray-300 mb-4">
        The accuracy of outputs will play a great part in the success of any AI model. We focus on preventing
        hallucinations that cause the model to generate incorrect or nonsensical information. Likewise, it is
        equally important to optimize response times to deliver a seamless and responsive user experience.
        Additionally, we ensure the prevention of data leakage by implementing stringent testing protocols to
        protect sensitive information and comply with data privacy standards.
    </p>

    <p className="text-gray-300">
        Our commitment to continuous learning & improvement will pave the path for our testing strategies to
        evolve as these models evolve and adapt to new data, environments, and requirements. By partnering
        with us, you will have a trusted ally to maximize the value and impact of your AI and LLM initiatives.
    </p>
</div>

        </div>
    );
};

export default Transformative;
