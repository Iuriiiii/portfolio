import React from 'react'

interface Props { src: string, name: string, children: React.ReactNode, linkedin?: string, className?: string }

const RecomendationCard = (props: Props) => {
    return (
        <div className={`flex-full w-screen flex-center snap-center ${props.className || ''} `}>
            <div className='w-64 md:w-4/6 relative flex-center flex-col'>

                <div className='w-36 relative'>
                    <img className='rounded-full w-full' src={props.src} alt={props.name} />
                    <div className='w-10 absolute right-0 top-0'>
                        {props.linkedin && <a href={props.linkedin} target='_blank'><img className='w-full' src='/img/linkedin-logo.png' alt='linkedin' /></a>}
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

export default RecomendationCard