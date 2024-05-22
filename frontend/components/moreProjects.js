import React from "react";
import Link from "next/link";
import Image from "./image";
import {useRouter} from "next/router";
import ru from "../public/locales/ru";
import ua from "../public/locales/ua";
import en from "../public/locales/en";


const MoreProjects = ({ articles, current, link }) => {

  const router = useRouter();
  const {locale} = router;
  let t ;
  switch (locale) {
      case "ru-RU":
          t = ru;
          break;
      case "uk-UA":
          t = ua;
          break;
      default:
          t = en;
  };

  const currentArticleIndex = articles.findIndex(
    (article) => article.id === current
  );

  let prevArticle;
  let nextArticle;
  const morePosts = [];
  if (currentArticleIndex - 1 >= 0) {
    prevArticle = { ...articles[currentArticleIndex - 1], text: t.previous };
    morePosts.push(prevArticle);
  }

  if (currentArticleIndex + 1 < articles.length) {
    nextArticle = { ...articles[currentArticleIndex + 1], text: t.next };
    morePosts.push(nextArticle);
  }

  return (
    <section className="moreProjects">
      <div className="container">
        {morePosts.map((article) => {
          const firstImgEl = article.contentBlock.find((item) => {
            if (item.image) {
              return item;
            }
          });
          return article ? (
            <Link key={article.id} href={`/${link}/${article.slug}`}>
              <a className="card">
                <h2>{article.text ? article.text : null}</h2>
                {firstImgEl ? (
                  <div className="top">
                    <Image image={firstImgEl.image} />
                  </div>
                ) : null}
              </a>
            </Link>
          ) : null;
        })}
      </div>
    </section>
  );
};

export default MoreProjects;
