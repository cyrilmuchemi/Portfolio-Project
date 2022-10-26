import { motion } from 'framer-motion';
import * as React from 'react';
import { urlFor } from '../sanity';
import { Project } from '../typings';


type Props = {
    projects: Project[]
}

export default function Projects({projects}: Props) {
    return (
      <div className='min-h-screen text-white relative flex overflow-hidden flex-col mt-36 md:flex-row max-w-full justify-evenly mx-auto items-center z-0 text-left'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects?.map((project, index) => (
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
                    src={urlFor(project?.image).url()}
                    alt='project image'
                    width={500}
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#088F8F]/50'>Case Study {index + 1} of {projects.length}:</span>{" "}
                             {project?.title}
                        </h4>
                        
                        <p className='text-lg text-center md:text-left'>
                            {project?.summary}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#088F8F]/10 left-0 h-[500px] -skew-y-12'/>
      </div>
    );
}
