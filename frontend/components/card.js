import React from "react";
import Link from "next/link";
import Image from "./image";

const Card = ({ article, }) => {
  return (
    <Link href={`/projects/${article.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="top">
            <Image image={article.image} />
          </div>
          <div className="cardBody">
            <p className="name">
              {article.projectName}
            </p>
            <p className="title">
              {article.text.about.substring(0,140) + '...'}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
