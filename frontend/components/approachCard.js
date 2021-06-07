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
                    const firstTxtEl = article.contentBlock.find(item => {
                        if(item.about){
                            return item
                        }
                    })
                    return(
                    <Link href={`/approach/${article.slug}`}>
                        <a className="card">
                            <div className="top">
                                {firstImgEl ? <Image image={firstImgEl.image} /> :''}
                            </div>
                            <div className="cardBody">
                                <p className="name">
                                    {article.projectName}
                                </p>
                                {/*{firstTxtEl.length >=120 ? <p className="title">{firstTxtEl.about.substring(0,120) + '...'}</p> : ''}*/}
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
