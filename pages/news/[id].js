import { server } from "../../config";
import Link from "next/link";
import axios from "axios";
import Layout from "@components/Layout";
import { GeoAltFill, Calendar, Pencil } from "react-bootstrap-icons";

import Image from "next/image";

const Article = ({ article }) => {
  return (
    <>
      <Layout title="Next News" description="Next News">
        <div className="container col-xxl-8 px-4">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 pb-2">
            <div className="col-10 col-sm-8 col-lg-6">
              <Image
                src={article.img}
                className="d-block mx-lg-auto img-fluid"
                alt="articleimg"
                width="800"
                height="800"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">{article.titulo}</h1>
              <p className="lead">{article.descricao}</p>
              <ul className="d-flex list-unstyled mt-auto pt-4">
                <li className="me-auto">
                  <Image
                    src={article.autorImg}
                    alt="autorimg"
                    width="72"
                    height="72"
                    className="rounded-circle border border-white"
                  />{" "}
                </li>
                <li className="d-flex align-items-center me-3">
                  <Pencil />
                  <small className="box-shadow-date spacing-location">
                    {article.autor}
                  </small>
                </li>
                <li className="d-flex align-items-center me-3">
                  <GeoAltFill />
                  <small className="box-shadow-date spacing-location">
                    {article.location}
                  </small>
                </li>
                <li className="d-flex align-items-center">
                  <Calendar />
                  <small className="box-shadow-date spacing-location">
                    {article.data}
                  </small>
                </li>
              </ul>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link href="/news">
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg px-4 me-md-2 mt-2"
                  >
                    Retornar{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await axios.get(`${server}/noticias/${context.params.id}`);

  const article = res.data;

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await axios.get(`${server}/noticias`);

  const articles = res.data;

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
