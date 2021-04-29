import React from "react";
import Link from "next/link";
import Image from "./image";

const Card = ({ article, }) => {
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

  return (
    <Link href={`/projects/${article.slug}`}>
      <a className="card">
          <div className="top">
            {firstImgEl ? <Image image={firstImgEl.image} /> :''}
          </div>
          <div className="cardBody">
            <p className="name">
              {article.projectName}
            </p>
              {firstTxtEl ? <p className="title">{firstTxtEl.about.substring(0,120) + '...'}</p> : ''}
          </div>
      </a>
    </Link>
  );
};

export default Card;
