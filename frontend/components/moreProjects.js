import React from "react";
import Link from "next/link";
import Image from "./image";


const MoreProjects = ({articles, current}) => {
    // const findPrev = articles.findIndex(article, current.id --)

    return (
        <section className="moreProjects">
            <div className="container">
                {articles.map((article) =>{
                    const firstImgEl = article.contentBlock.find(item => {
                        if(item.image){
                            return item
                        }
                    })
                    return(
                        <Link key={article.id} href={`/projects/${article.slug}`}>
                            <a className="card">
                                <div className="top">
                                    {firstImgEl ? <Image image={firstImgEl.image} /> :''}
                                </div>
                            </a>
                        </Link>
                    )
                    }
                )}
            </div>
        </section>
    );
};

export default MoreProjects;