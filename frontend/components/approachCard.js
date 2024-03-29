import React from "react";
import Link from "next/link";
import Image from "./image";


const ApproachesCard = ({ articles, count }) => {
    return (
        <section className="projects">
            <div className="container">
                {[...articles].reverse().map((article, i) => {
                    if( i >= count ){
                        return
                    }
                    const firstImgEl = article.contentBlock.find(item => {
                        if(item.image){
                            return item
                        }
                    })
                    return(
                    <Link key={article.id} href={`/approach/${article.slug}`}>
                        <a className="card">
                            <div className="top">
                                {firstImgEl ? <Image image={firstImgEl.image} /> :''}
                            </div>
                            <div className="cardBody">
                                <p className="name">
                                    {article.name}
                                </p>
                            </div>
                        </a>
                    </Link>
                    )
                })}
            </div>
        </section>
    );
};

export default ApproachesCard;
