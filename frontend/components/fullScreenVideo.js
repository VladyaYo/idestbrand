import React from "react";
import {getStrapiMedia} from "../lib/media";


const FullScreenVideo = ({video}) => {
    const videoUrl = getStrapiMedia(video.video);
    return (
        <section className="fullscreenVideo">
            <video className='videoTag' autoPlay loop muted>
                <source src={videoUrl} type='video/mp4' />
            </video>
        </section>
    );
};

export default FullScreenVideo;