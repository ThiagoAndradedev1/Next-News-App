import React from "react";

import NewsItem from "@components/NewsItem";

const NewsList = ({ news }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-5">
      {news.map((newsItem) => (
        <NewsItem key={newsItem.id} newsItem={newsItem} />
      ))}
    </div>
  );
};

export default NewsList;
