import React from "react";
import {getStrapiMedia} from "../lib/media";
import useWindowSize from "../utils/useWindowSize";


const ContainerVideo = ({video}) => {
    const videoUrl = getStrapiMedia(video.video);
    const { width } = useWindowSize();
    return (
        <section className="containerVideo">
            <div className="container">
                {width > 768 ?   <video className='videoTag' autoPlay playsInline loop muted>
                    <source src={videoUrl} type='video/mp4' />
                </video> :
                    video.mobile ? <img src={getStrapiMedia(video.mobile)} alt=""/> : null
                }
            </div>
        </section>
    );
};

export default ContainerVideo;