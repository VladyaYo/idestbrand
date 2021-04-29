import React from "react";
import {getStrapiMedia} from "../lib/media";


const ContainerVideo = ({video}) => {
    const videoUrl = getStrapiMedia(video.video);
    return (
        <section className="containerVideo">
            <div className="container">
                <video className='videoTag' autoPlay loop muted>
                    <source src={videoUrl} type='video/mp4' />
                </video>
            </div>
        </section>
    );
};

export default ContainerVideo;