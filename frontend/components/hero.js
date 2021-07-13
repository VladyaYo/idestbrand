import React, {useState} from "react";
import {getStrapiMedia} from "../lib/media";
import useWindowSize from "../utils/useWindowSize";

const Hero = ({ hero }) => {
    const textColor =  hero.black ? "#000" : "#fff";
    const { width } = useWindowSize();
    return (
        <section className="hero">
            { hero.video.mime.indexOf('video') !== -1 && width > 768 ?
                    <video className='videoTag' autoPlay playsInline loop muted>
                        <source src={getStrapiMedia(hero.video)} type='video/mp4' />
                    </video>
                    : width < 768 && hero.mobile ?
                        <img src={getStrapiMedia(hero.mobile)} alt={hero.video.alternativeText}/>
                    :
                    <img src={getStrapiMedia(hero.video)} alt={hero.video.alternativeText}/>
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