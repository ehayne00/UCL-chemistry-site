import React, { useState } from "react";
import articles from "../data/articles.js";
import ArticleTitle from "./ArticleTitle";

const Home = () => {
  const [index, setIndex] = useState(0);

  const renderThree = articles.slice(index, index + 3);

  const renderOlder = () => {
    setIndex((index) => index + 3);
  };

  const renderNewer = () => {
    setIndex((index) => index - 3);
  };

  return (
    <div>
      <h1 className="content-gap">This is the home page</h1>
      <p>blah blah blah about us!</p>
      <h1>Latest articles:</h1>
      <div className="article-box">
        {renderThree.map((article) => (
          <ArticleTitle article={article} key={article.id} />
        ))}
        {index !== 0 && (
          <button className="btn" onClick={renderNewer}>
            See Newer
          </button>
        )}
        {index < articles.length - 3 && (
          <button className="btn" onClick={renderOlder}>
            See Older
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
