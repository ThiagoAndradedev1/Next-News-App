import ArticleList from "@components/ArticleList.js";
import { server } from "../config";

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/noticias`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
