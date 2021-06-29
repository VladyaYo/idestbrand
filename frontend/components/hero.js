import React from "react";
import {getStrapiMedia} from "../lib/media";

const Hero = ({ hero }) => {
    const videoUrl = getStrapiMedia(hero.video);
    const textColor =  hero.black ? "#000" : "#fff";

    return (
        <section className="hero">
            { hero.video.mime.indexOf('video') !== -1 ?
                <video className='videoTag' preload autoPlay playsinline loop muted>
                    <source src={videoUrl} type='video/mp4' />
                </video>
                :
                <img src={videoUrl} alt={hero.video.alternativeText}/>
            }
            <div className="container">
                <div className="text" style={{color:textColor}}>
                    <h1>{hero.heading ? hero.heading : null}</h1>
                    <p className="title">{hero.title ? hero.title : null}</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;