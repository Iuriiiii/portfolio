import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

interface Props { }

const fourOneFour = (props: Props) => {
    const router = useRouter();

    useEffect(() => {
        router.push('https://www.youtube.com/watch?v=mCdA4bJAGGk');
    }, [])

    return (
        <div>
        </div>
    );
}

export default fourOneFour