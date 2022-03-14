import React, { useState, useEffect } from "react";
import "./styles.css";
import { findById } from "../../../util/findById";
import RecentArticle from "./RecentArticle";
import Programs from "../../../util/ProgramLogos/ProgramLogos";

function Recents(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const findArticles = (idArray) => {
      const articles = [];
      idArray.forEach((id) => {
        const art = findById(id, props.articles);
        articles.push(art);
      });
      return articles;
    };
    if (props.ids) {
      setArticles(findArticles(props.ids));
    } else {
      setArticles(props.articles);
    }
  }, [props.articles, props.ids]);

  const renderArticles = (articles) => {
    return articles.map((article) => (
      <RecentArticle
        id={article.id}
        image={article.acf.image}
        category={article.acf.category}
        title={article.title.rendered}
        custom_byline={article.acf.custom_byline}
        author={article.acf.author}
        date={article.acf.date}
        comments={props.comments}
      />
    ));
  };

  return (
    <div>
      <Programs />
      <div className="recent-container text-left">
        <div className="recent-title-section">
        Headlines Edition #3: Hostile Nation States, Terrorists and Cyber Criminals
        </div>
        <hr
          style={{
            color: "gold",
            backgroundColor: "gold",
            height: 1,
          }}
        />
        {renderArticles(articles)}
      </div>
    </div>
  );
}

export default Recents;
