import React, { ClassAttributes, HTMLAttributes, SetStateAction, useEffect, useRef, useState } from 'react'
import { AiFillPlayCircle, AiOutlineDesktop } from 'react-icons/ai';
import { BsArrowLeftSquare, BsArrowRightSquare, BsPhone } from 'react-icons/bs';
import { HiInformationCircle } from 'react-icons/hi';
import { GoDeviceDesktop } from 'react-icons/go';
import { useGlobal } from 'react-simplify/common';
import { IProjectsRef, TProject } from '../types';
import { IoReturnUpBackSharp } from 'react-icons/io5';
import Image from 'next/image';


type Props = TProject & HTMLAttributes<HTMLElement>;

const ProjectCard = (props: Props) => {
    const [mobile, setMobile] = useGlobal<boolean | null>('mobile', null);
    const [read, setRead] = useState(false);
    const [projectIndex, setprojectIndex] = useGlobal<number>('projectIndex');

    return (
        <div className={`bg-neutral-900 md:flex h-full w-full border-neutral-500 md:border-r-2 ${props.className || ''}`} style={props.style}>
            <div className='flex-center flex-col w-full h-full'>
                <div className='h-12 flex-center space-x-8'>
                    <button className='hover:scale-110' onClick={() => setMobile(false)} type='button'><GoDeviceDesktop /></button>
                    <button className='hover:scale-110' onClick={() => setMobile(true)} type='button'><BsPhone /></button>
                </div>
                <div className='bg-neutral-700 h-[calc(100%-3rem)] rounded-b-lg'>
                    <img style={{ display: mobile ? 'none' : 'block' }} className='object-contain md:object-contain w-full h-full' src={props.images.desktop} alt={props.title} />
                    <img style={{ display: !mobile ? 'none' : 'block' }} className='object-cover h-full' src={props.images.mobile} alt={props.title} />
                </div>
                {!read &&
                    <>
                        <div className='absolute top-12 w-full'>
                            <h2 className='text-center text-2xl md:text-3xl font-extrabold shadow-from-top '>{props.title}</h2>
                        </div>
                        <button onClick={() => setprojectIndex(projectIndex + 1)} className='z-20 bg-neutral-900 bg-opacity-70  text-5xl transition-transform hover:scale-125 absolute right-5' type='button'><BsArrowRightSquare /></button>
                        <div className='absolute text-4xl mb-5 space-x-5 flex flex-col md:flex-row transition-transform bg-neutral-900 p-2 md:p-5 rounded-full cursor-pointer bg-opacity-70'>
                            <button className='hover:scale-110' onClick={() => setRead(true)}><HiInformationCircle /></button>
                            <a className='hover:scale-110' href={props.demo} target='_blank' rel='noreferrer nofollow'><AiFillPlayCircle /></a>
                        </div>
                        {
                            props.authors.length > 1 && <div className='cursor-default absolute mt-5 p-5 bg-yellow-300 h-12 flex-center translate-y-14 rounded-full'>
                                <h2 className='text-2xl font-bold'>Collaboration</h2>
                            </div>
                        }
                    </>
                }
            </div>
            {read &&
                <div onClick={() => setRead(false)} className='absolute bg-neutral-900 bg-opacity-70 md:shadow-from-bottom bottom-0 pb-16 md:pb-28 w-full h-full flex-center flex-col font-bold'>
                    <p className='pt-5 md:pt-20 underline text-lg '>{props.description}</p>
                    <p className='w-4/6 pt-5 max-h-44 overflow-y-scroll'>{props.information}</p>
                    <button className='text-3xl animate-ping'><IoReturnUpBackSharp /></button>
                </div>
            }
        </div>
    )
}

export default ProjectCard