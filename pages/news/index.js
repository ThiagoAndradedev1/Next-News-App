import Layout from "@components/Layout";
import NewsList from "@components/NewsList";
import { server } from "config";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch(`${server}/noticias`);
  const news = await res.json();

  return {
    props: {
      news,
    },
  };
};

export default function News({ news }) {
  return (
    <Layout title="Next News - Todas noticias">
      <h1 className="border-b pb-2">All News</h1>
      <NewsList news={news} />
    </Layout>
  );
}
