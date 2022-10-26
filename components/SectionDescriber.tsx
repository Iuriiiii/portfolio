import React, { useState } from 'react';
import { GiClick } from 'react-icons/gi';

interface Props { title: string, descripton: string, color?: string }

const SectionDescriber = (props: Props) => {
    const [show, setShow] = useState<boolean>(true);

    function sectionHider(e: React.MouseEvent<HTMLDivElement>) {
        e.currentTarget.style.opacity = '0';

        setTimeout(() => {
            setShow(false);
        }, 2000);
    }

    if (!show)
        return null;

    return (
        <div onClick={sectionHider} className={`z-10 absolute top-0 left-0 w-full h-full flex-center cursor-pointer duration-[1700ms] ${props.color || 'bg-zinc-600'}`}>
            <div className='-translate-y-10 px-5 text-center'>
                <h2 className='text-3xl'>{props.title}</h2>
                <p>{props.descripton}</p>

                <div className='text-center text-3xl animate-pulse'><button><GiClick /></button></div>
            </div>
        </div>
    )
}

export default SectionDescriber