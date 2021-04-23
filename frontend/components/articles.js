import React from "react";
import Card from "./card";

const Articles = ({ articles, count }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
      <section className="projects">
          <div className="container">
              {[...articles].reverse().map((article, i) => {
                      if( i >= count ){
                          return
                      }
                      return(
                          <Card
                              article={article}
                              key={article.id}
                          />
                      )
                  })}
          </div>
      </section>
  );
};

export default Articles;
