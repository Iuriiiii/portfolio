import React, { ClassAttributes, HTMLAttributes, SetStateAction, useEffect, useRef, useState } from 'react'
import { AiOutlineDesktop } from 'react-icons/ai';
import { BsArrowLeftSquare, BsArrowRightSquare, BsPhone } from 'react-icons/bs';
import { GoDeviceDesktop } from 'react-icons/go';
import { useGlobal } from 'react-simplify/common';
import { IProjectsRef, TProject } from '../types';


type Props = TProject & HTMLAttributes<HTMLElement>;

const ProjectCard = (props: Props) => {
    const [mobile, setMobile] = useState(false);
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
                {/* <button onClick={() => setprojectIndex(projectIndex - 1)} className='text-3xl transition-transform hover:scale-125 absolute left-5' type='button'><BsArrowLeftSquare /></button> */}
                <button onClick={() => setprojectIndex(projectIndex + 1)} className='bg-neutral-900 bg-opacity-70  text-3xl transition-transform hover:scale-125 absolute right-5' type='button'><BsArrowRightSquare /></button>
                <div className='absolute top-12 w-full'>
                    <h2 className='text-center text-2xl md:text-3xl font-extrabold shadow-from-top '>{props.title}</h2>
                </div>

                <div className='absolute -translate-y-10 md:translate-y-0 text-4xl hover:scale-110 transition-transform bg-neutral-900 p-5 rounded-lg cursor-pointer bg-opacity-70'>
                    <a href={props.demo} target='_blank'>Demo</a>
                </div>
            </div>
            <div className='absolute bg-neutral-900 bg-opacity-70 md:shadow-from-bottom bottom-0 pb-16 md:pb-28 w-full flex-center flex-col font-bold'>
                <p className='pt-5 md:pt-20 underline text-lg '>{props.description}</p>
                <p className='w-4/6 max-h-40 overflow-y-scroll'>{props.information}</p>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard