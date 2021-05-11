import React from "react";
import NewsItem from "@components/NewsItem";

const NewsList = ({ news }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {news.map((newsItem) => (
        <NewsItem newsItem={newsItem} />
      ))}
    </div>
  );
};

export default NewsList;
