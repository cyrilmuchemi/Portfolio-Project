import * as React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};


export default function ContactMe() {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:cyrilmuchemi@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };
    return(
        <div className='min-h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-white text-2xl'>Contact</h3>
            <div className='flex md:mt-32 mt-52 flex-col space-y-10'>
                <h4 className='md:text-3xl w-[400px] md:w-auto text-xl pr-16 pl-16 text-white font-semibold text-center'>
                    I have got just what you need.{" "}
                    <span className='underline decoration-[#088F8F]'>Lets Talk.</span>
                </h4>
                <div className='text-white pb-8 space-y-6'>
                    <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#088F8F] w-7 h-7 animate-pulse'/>
                    <p className='md:text-2xl'>+254742550846</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#088F8F] w-7 h-7 animate-pulse'/>
                    <p className='md:text-2xl'>cyrilmuchemi@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#088F8F] w-7 h-7 animate-pulse'/>
                    <p className='md:text-2xl'>00100, Nairobi</p>
                    </div>
                </div>
                <form className='md:mx-auto md:w-fit pt-6 space-y-2 flex pb-10 flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex md:flex-row flex-col space-y-3 md:space-y-0  md:space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text"/>
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-[#088F8F] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )

}

