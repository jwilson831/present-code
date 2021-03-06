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
    // console.log(articles);
    const sorted = articles.sort(
      (a, b) => new Date(b.acf.date).getTime() - new Date(a.acf.date).getTime()
    );
    // console.log(sorted);

    return sorted.map((article) => (
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
      <div className="recent-container text-left">
        <div className="recent-title-section">
        Current Features & Recent Postings
          {/* Headlines Edition #4: The Death of Discourse */}
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
