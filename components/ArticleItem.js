import React from "react";

const ArticleItem = ({ article }) => {
  return (
    <div>
      <a key={article.id}>
        <h3>{article.titulo} &rarr;</h3>
        <p>{article.descricao}</p>
      </a>
    </div>
  );
};

export default ArticleItem;
