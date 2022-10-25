import Image from 'next/image';
import React, { useRef } from 'react'

interface Props { cref: React.LegacyRef<HTMLDivElement> | null, src: string, name: string, children: React.ReactNode, linkedin?: string, className?: string, id?: string }

const RecomendationCard = (props: Props, ref: React.LegacyRef<HTMLDivElement> | null) => {

    return (
        <div ref={props.cref} id={props.id} className={`review flex-full w-screen flex-center snap-center ${props.className || ''} `}>
            <div className='w-64 md:w-4/6 relative flex-center flex-col'>
                <div className='w-36 relative'>
                    <img className='rounded-full w-full' src={props.src} alt={props.name} />
                    <div className='w-10 absolute right-0 top-0'>
                        {props.linkedin && <a href={props.linkedin} target='_blank' rel='noreferrer'><img className='w-full' src='/img/linkedin-logo.png' alt='linkedin' /></a>}
                    </div>
                </div>
                <h2 className='font-bold text-center'>{props.name}</h2>
                <div className='my-2'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default React.forwardRef(RecomendationCard);