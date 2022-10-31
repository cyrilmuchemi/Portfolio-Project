import React from 'react';
import { useLottie } from "lottie-react";
import developerAnimation from "../myself.json";
import { motion } from 'framer-motion';

export default function App () {

    const options = {
        animationData: developerAnimation,
        loop: true
    };

    const { View } = useLottie(options);

  return (
    <div className='h-screen flex-col flex relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-white text-2xl'>About</h3>
    <motion.div 
    initial={{
        x: -260,
        opacity: 0
    }}
    whileInView={{
        x: 0,
        opacity: 1
    }}

    transition={{
        duration: 1.2
    }}

    viewport={{
        once: true
    }}
    className='md:w-[320px] md:h-[320px] w-[200px] h-[200px] flex-shrink-0 pt-[156px] md:pt-0 mt-14 md:mb-0'>
        { View }
    </motion.div>
    <div className='px-10 mt-24 md:mt-0 md:pt-0 pt-16 space-y-10 md:px-10'>
        <h4 className='text-white font-semibold text-2xl md:text-4xl'>Currently residing in <span className='text-cyan-500'>Nairobi.</span></h4>
        <p className='text-white text-base tracking-[1px] md:w-auto w-[340px] md:tracking-normal md:text-lg'>
        Equiped with a record of success in consistently 
        identifying and providing the technological needs of companies through ingenious innovations. Proficient in Wordpress,
        writing and testing codes, troubleshooting simple/complex issues, and implementing new features based on user feedback.
    </p>
    </div>
    </div>
  );
}