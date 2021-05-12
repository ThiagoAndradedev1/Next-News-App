import Layout from "@components/Layout";
import NewsList from "@components/NewsList";
import { server } from "config";
import React from "react";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await axios.get(`${server}/noticias`);
  const news = res.data;

  return {
    props: {
      news,
    },
    revalidate: 5,
  };
};

const News = ({ news }) => {
  return (
    <Layout title="Next News - Todas noticias">
      <h1 className="border-b pt-2 pb-2">Todas as notícias</h1>
      <NewsList news={news} />
    </Layout>
  );
};

export default News;
