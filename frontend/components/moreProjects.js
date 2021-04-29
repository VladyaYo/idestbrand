import React from "react";
import Link from "next/link";
import Image from "./image";


const MoreProjects = ({article}) => {
    // const firstImgEl = article.contentBlock.find(item => {
    //     if(item.image){
    //         return item
    //     }
    // })
    return (
        <section className="moreProjects">
            <div className="container">
                <p>{article.id}</p>
                {/*{*/}
                {/*    <Link href={`/projects/${article.slug}`}>*/}
                {/*        <a className="card">*/}
                {/*            <div className="top">*/}
                {/*                {firstImgEl ? <Image image={firstImgEl.image} /> :''}*/}
                {/*            </div>*/}
                {/*        </a>*/}
                {/*    </Link>*/}
                {/*}*/}
            </div>
        </section>
    );
};

export default MoreProjects;