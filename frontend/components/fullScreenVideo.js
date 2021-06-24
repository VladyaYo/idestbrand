import React from "react";
import {getStrapiMedia} from "../lib/media";


const FullScreenVideo = ({video}) => {
    const videoUrl = getStrapiMedia(video.video);
    return (
        <section className="fullscreenVideo">
            <video className='videoTag' preload playsinline autoPlay loop muted>
                <source src={videoUrl} type='video/mp4' />
            </video>
        </section>
    );
};

export default FullScreenVideo;