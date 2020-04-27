import React, { useState } from "react";
import articles from "../data/articles.js";
import ArticleTitle from "./ArticleTitle";

const Home = () => {
  const [visible, setVisible] = useState(false);

  const handleNewestClick = () => {
    setVisible(false);
  };

  const handleOlderClick = () => {
    setVisible(true);
  };

  return (
    <div>
      <h2 className="content-gap">This is the home page</h2>
      <p>blah blah blah about us!</p>
      <h2>Latest articles:</h2>
      <div className="article-box">
        {articles.reverse().map((
          article //we cannot have reverse here as it reverses again on each state change
        ) => (
          <ArticleTitle article={article} key={article.id} />
        ))}
        {visible && <button onClick={handleNewestClick}>Newest</button>}
        <button onClick={handleOlderClick}>See Older...</button>
      </div>
    </div>
  );
};

export default Home;
