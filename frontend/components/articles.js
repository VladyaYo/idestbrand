import React from "react";
import Card from "./card";

const Articles = ({ articles, count, path }) => {
  return (
      <section className="projects">
          <div className="container">
              {[...articles].reverse().map((article, i) => {
                      if( i >= count ){
                          return
                      }
                      return(
                          <Card
                              path={path}
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
