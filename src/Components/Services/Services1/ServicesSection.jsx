import { ShieldCheck, Smartphone, Bolt, Wrench, Server } from "lucide-react";
import SmilingTeam from "../../../assests/Images/Banner/SmilingTeam.png";

const benefits = [
  {
    title: "Custom-Built Solutions",
    description: "Designed to meet your unique business requirements with a flexible and personalized approach.",
    icon: Wrench,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Scalable & High-Performance",
    description: "Optimized to handle growing user demands and business expansion efficiently.",
    icon: Server,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Secure & Reliable",
    description: "Developed with advanced security protocols to safeguard user data and operations.",
    icon: ShieldCheck,
    gradient: "from-pink-500 to-purple-600",
  },
  {
    title: "Mobile-Optimized",
    description: "Ensures a seamless and responsive experience across all devices and platforms.",
    icon: Smartphone,
    gradient: "from-green-400 to-teal-500",
  },
  {
    title: "Fast Loading & Easy Maintenance",
    description: "Optimized code and flexible architecture for better performance and future scalability.",
    icon: Bolt,
    gradient: "from-gray-700 to-black",
  },
];

export default function WhyChooseUsSection() {
  const floatingCard = benefits[4];
  const FloatingIcon = floatingCard.icon;

  return (
    <div className="bg-white pt-16 pb-24 px-4 sm:px-6 lg:px-20" id="why-choose-us">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div>
          <h4 className="text-sm font-bold tracking-wide text-gray-100 text-center bg-gradient-to-r from-[#15f5ba] to-[#06f] w-fit px-3 py-1 rounded-md mb-4 uppercase">
            Why Choose Us
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nobody Knows Clients Like We Have Preferred
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Our typical Web & App Development Benefits
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.slice(0, 4).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition"
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r ${item.gradient} text-white mb-4`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-md mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* 5th card centered in desktop and left in phone*/}
          <div className="mt-10 flex justify-start sm:justify-center">
            <div className="bg-gray-50 shadow-xl rounded-2xl px-6 py-5 border text-left sm:text-center w-full max-w-sm">
              <div className={`mb-3 w-10 h-10 rounded-full bg-gradient-to-r ${floatingCard.gradient} flex items-center justify-center text-white sm:mx-auto`}>
                <FloatingIcon size={20} />
              </div>
              
              <h4 className="font-semibold text-gray-800 text-md text-left sm:text-center">{floatingCard.title}</h4>
              <p className="text-gray-600 text-sm text-left sm:text-center">{floatingCard.description}</p>
            </div>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative w-full">
          <img
            src={SmilingTeam}
            alt="Smiling team"
            className="rounded-xl shadow-lg w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[900px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
