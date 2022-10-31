import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { useLottie } from "lottie-react";
import computerAnimation from "../computer.json";
import Link from "next/link";


export default function Hero() {

    const [text, count] = useTypewriter({
    words: [ 
        "Hi. I'm Cyril", 
        "Guy-who-loves-Coffee", 
        "<ButLovesToCodeMore/>"
    ],
    loop: true,
    delaySpeed: 2000,
    })

    const options = {
        animationData: computerAnimation,
        loop: true
    };

    
    const { View } = useLottie(options);


    return(
        <div className="h-screen flex flex-col sspace-y-8 w-screen items-center justify-center text-center overflow-hidden">
            <BackgroundCircles/>
            <div className="w-[150px] h-[150px]">{View}</div>
            <div className="z-20">
            <h2 className="text-sm uppercase text-white pb-5 tracking-[8px] md:tracking-[15px]">Software Engineer</h2>
            <h1 className="text-3xl lg:text-5xl font-semibold px-10">
                <span className="text-white">{text}</span>
                <Cursor cursorColor="#088F8F"/>
            </h1>
            <div className='pt-5'>
                <Link href='#about'>
                <button className="HeroButton">About</button>
                </Link>
                <Link href='#skills'>
                <button className="HeroButton">Skills</button>
                </Link>
                <Link href='#projects'>
                <button className="HeroButton">Projects</button>
                </Link>
                <Link href='#contact'>
                <button className="HeroButton">Contact</button>
                </Link>
            </div>
            </div>
        </div>
    )
}