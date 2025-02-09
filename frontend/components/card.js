import React from "react";
import Link from "next/link";
import Image from "./image";

const Card = ({ article, path='projects' }) => {

    const firstImgEl = article.image1 || article.contentBlock.find(item => {
        if(item.image){
            return item
        }
    })
    const firstTxtEl = article?.mainText?.about || article.contentBlock.find(item => {
        if(item.about){
            return item
        }
        else return null
    })

  return (
    <Link href={`/${path}/${article.slug}`}>
      <a className="card">
          <div className="top">
            {firstImgEl ? <Image image={firstImgEl?.image} /> :''}
          </div>
          <div className="cardBody">
            <p className="name">
              {article.projectName}
            </p>
              {firstTxtEl?.about ? <p className="title">{firstTxtEl?.about?.substring(0,120) + '...'}</p> : null}
          </div>
      </a>
    </Link>
  );
};

export default Card;
