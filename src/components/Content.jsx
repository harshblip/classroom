import React from 'react'
import Header from './Header'
import YouTube from 'react-youtube'

export default function Content() {
    return (
        <div className='flex flex-col'>
            <Header />
            <div>
                {/* <Students /> */}
                <YouTube />
            </div>
        </div>
    )
}
