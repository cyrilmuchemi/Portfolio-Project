import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

export default function Header({}: Props) {
    return(
        <header className='sticky top-0 flex items-start justify-between max-w-7xl p-5 mx-auto z-20 xl:items-center'>
            <motion.div 
            initial={{
                x:-500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.4
            }}
            className='flex flex-row items-center'>
            <SocialIcon url="https://linkedin.com/in/cyril-muchemi/" fgColor='green' bgColor='transparent' />
            <SocialIcon url="https://twitter.com/CyrilMuchemi" fgColor='green' bgColor='transparent' />
            <SocialIcon url="https://github.com/cyrilmuchemi" fgColor='green' bgColor='transparent' />
            </motion.div>
            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.4
            }}
            className='flex flex-row cursor-pointer items-center'>
            <SocialIcon className='cursor-pointer' network='email' fgColor='green' bgColor='transparent' />
            <p className='uppercase hidden md:inline-flex text-sm font-semibold text-gray'>Get In<b className='text-green-500 ml-1'>Touch</b></p>
            </motion.div>
        </header>
    )
}
