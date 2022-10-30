import * as React from 'react';
import phoneAnimation from '../phone.json';
import { useLottie } from "lottie-react";
import { motion } from 'framer-motion';
import { Skill as SkillType } from '../typings';

type Props = {
  skills: SkillType[]
};

export function Skills ({skills}: Props) {
    const options = {
        animationData: phoneAnimation,
        loop: true
    };

    const { View } = useLottie(options);

  return (
    <div className='flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h4 className='text-white text-2xl tracking-[20px] uppercase absolute top-24'>Skills</h4>
      <h5 className='text-white absolute top-40 tracking-[3px]'>For a more <span className='text-cyan-500'>detailed</span>  overview, please feel free to check the tools that
      were used on<span className='text-cyan-500'>  a per-project basis</span></h5>
      <div className='w-[480px] h-[480px] flex-shrink-0 mb-0 mt-24 pt-10'>
      { View }
      </div>
      <motion.button
      whileHover={{scale: 1.1}}
      whileTap={{ scale: 0.9 }}
      className='buttons pb-5'
      >
      <a href='https://docs.google.com/document/d/10SOc85Hqh8KvXRH6jolGZdQjHRw0ph6LIAQXR7HKWWs/edit?usp=sharing'> See Resume</a>
      </motion.button>
      </div>
  );
}
