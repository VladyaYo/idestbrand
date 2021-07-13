import React from "react";
import {getStrapiMedia} from "../lib/media";
import useWindowSize from "../utils/useWindowSize";

const FullScreenVideo = ({video}) => {
    const videoUrl = getStrapiMedia(video.video);
    const { width } = useWindowSize();
    return (
        <section className="fullscreenVideo">
            { width > 768 ?
                <video className='videoTag' playsInline autoPlay loop muted>
                    <source src={videoUrl} type='video/mp4' />
                </video>  :
                video.mobile ? <img src={getStrapiMedia(video.mobile)} alt="gif image"/> : null
                }
        </section>
    )}
export default FullScreenVideo;