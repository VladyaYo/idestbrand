import React from "react";
import Link from "next/link";
import Image from "./image";


const MoreProjects = ({articles, current, link}) => {

    const currentArticleIndex = articles.findIndex(article => article.id === current);

    let prevArticle;
    let nextArticle;
    const morePosts = []
    if(currentArticleIndex - 1 >= 0){
        prevArticle = {...articles[currentArticleIndex - 1], text: "Previous"};
        morePosts.push(prevArticle)
    }

    if(currentArticleIndex + 1 < articles.length){
        nextArticle = {...articles[currentArticleIndex + 1], text: "Next"};
        morePosts.push(nextArticle)
    }

    return (
        <section className="moreProjects">
            <div className="container">
                {morePosts.map((article) =>{
                    const firstImgEl = article.contentBlock.find(item => {
                        if(item.image){
                            return item
                        }
                    })
                    return(
                        article ?
                        <Link key={article.id} href={`/${link}/${article.slug}`}>
                            <a className="card">
                                <h2>{article.text ? article.text : null}</h2>
                                {firstImgEl ?
                                <div className="top">
                                     <Image image={firstImgEl.image} />
                                </div>
                                    : null}
                            </a>
                        </Link>
                       : null
                    )
                    }
                )}
            </div>
        </section>
    );
};

export default MoreProjects;