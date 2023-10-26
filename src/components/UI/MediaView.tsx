import React from 'react';

interface MediaViewProps {
    url: string;
    type: string;
};

const MediaView = ({ url, type } : MediaViewProps) => {
    return (
        <>
        <div className='w-full'>
            <h1>VideoView</h1>
            {type === 'video' ? 
            <video
            className='w-full'
            autoPlay
            muted
            loop
            src={url}
            >
            </video> : <></>}
            {type === 'image' ? <img></img> : <></>}
        </div>
        </>
    )
};

export default MediaView;