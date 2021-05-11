import React from "react";
import ArticleItem from "@components/ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div>
      {/* <h1>Hello</h1> */}
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
