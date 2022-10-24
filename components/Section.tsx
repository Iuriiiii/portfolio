import React, { useRef } from 'react'
import { useEffect } from 'react';

interface Props { id?: string, children: React.ReactNode, _ref?: React.RefObject<HTMLElement>, className?: string, style?: React.CSSProperties }

const Section = (props: Props) => {

    return (
        <section id={props.id} ref={props._ref} className={`relative h-[calc(100vh-3rem)] w-screen snap-start scroll-mt-12 ${props.className || ''}`} style={props.style}>
            {props.children}
        </section>
    )
}

export default Section