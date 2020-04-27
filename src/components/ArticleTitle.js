import React from "react";

const ExternalLink = ({ to = "/", children }) => (
  <a href={to} target="_blank">
    {children}
  </a>
);

const ArticleTitle = ({ article }) => {
  return (
    <div className="rowFlex2">
      <h2>{article.date}</h2>
      <ExternalLink to={article.url}><h2>{article.title}</h2></ExternalLink>
    </div>
  );
};

export default ArticleTitle;
