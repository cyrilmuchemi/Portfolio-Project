import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';


export default function Header() {
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
            <SocialIcon url="https://linkedin.com/in/cyril-muchemi/" fgColor='#088F8F' bgColor='transparent' />
            <SocialIcon url="https://twitter.com/CyrilMuchemi" fgColor='#088F8F' bgColor='transparent' />
            <SocialIcon url="https://github.com/cyrilmuchemi" fgColor='#088F8F' bgColor='transparent' />
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
            <Link href='#contact'>
            <SocialIcon className='cursor-pointer' network='email' fgColor='#088F8F' bgColor='transparent' />
            </Link>
            <p className='uppercase hidden md:inline-flex text-sm font-semibold text-white'>Get In<b className='font-semibold text-cyan-500 ml-1'>Touch</b></p>
            </motion.div>
        </header>
    )
}
