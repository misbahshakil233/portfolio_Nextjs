

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useState, useEffect } from "react";
import Image from 'next/image'; // Import the Image component
import IMAGE from './ui/misbahImage.jpeg';

const Hero = () => {
  // Dynamic text array
  const dynamicText = [
    "I am Misbah",
    "I am a full stack developer",
    "Now exploring AI, Metaverse, and Web3.0",
  ];

  // State for changing text
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicText.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-20 pt-36 relative">
      {/* Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Radial gradient container */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero section with two columns */}
      <div className="flex flex-col md:flex-row justify-center items-center relative my-20 z-10 space-y-10 md:space-y-0">
        {/* Left column - Text */}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[40vw] flex flex-col items-center md:items-start md:text-left justify-center space-y-4">
          <p className="uppercase tracking-widest text-xs text-center md:text-left text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Crafting Innovative Solutions for a Connected Digital World"
            className="text-center md:text-left text-2xl"
          />

          {/* Dynamic changing text */}
          <p className="text-center md:text-left md:tracking-wider text-[40px] md:text-5xl lg:text-6xl mb-4 text-sm font-extrabold text-purple">
            {dynamicText[currentTextIndex]}
          </p>

          <div className="mt-4"> {/* Adjusting margin to give space */}
            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>

        {/* Right column - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <Image
            src={IMAGE} // Use Image component
            alt="Developer working"
            className="max-w-xs md:max-w-sm h-auto rounded-full transform transition-all duration-500 hover:scale-110"
            width={300} // Set width according to your layout
            height={300} // Set height according to your layout
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
