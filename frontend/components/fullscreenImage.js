import React from "react";
import {getStrapiMedia} from "../lib/media";


const FullScreenImage = ({image}) => {
    const imageUrl = getStrapiMedia(image.image);
    return (
        <section className="fullscreenImage">
            <img src={imageUrl} alt={image.alt}/>
        </section>
    );
};

export default FullScreenImage;