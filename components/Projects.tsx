import { motion } from 'framer-motion';
import * as React from 'react';

type Props = {}

export default function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
      <div className='min-h-screen text-white relative flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0 text-left'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project, index) => (
                <motion.div 
                initial={{ opacity:0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{  y: -300, opacity: 0}}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src='' alt=''/>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>Case Study {index + 1} of {projects.length}: Marketing Agency </h4>
                        <p className='text-lg text-center md:text-left'>
                            The quick brown fox jumped over the lazy dog.
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#088F8F]/100 left-0 h-[500px] -skew-y-12'/>
      </div>
    );
}
