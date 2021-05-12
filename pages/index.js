import Image from "next/image";
import Link from "next/link";

import Layout from "@components/Layout";
import Highlights from "@components/Highlights";
import ButtonGlitch from "@components/ButtonGlitch";

const Home = () => {
  return (
    <Layout title="Next News" description="Next News">
      <div className="container col-xxl-8 px-4">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-md-6">
            <Image
              src="/images/home_cyberpunk.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="426"
              height="600"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Cyberpunk 2077</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              dolor corporis dolorum quae quod atque dolores. A est natus
              incidunt nihil? Aut voluptatum, accusamus pariatur quaerat fugiat
              dicta reiciendis explicabo.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link href={`/news/11`}>
                <a>
                  <ButtonGlitch title="Confira" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <Highlights />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
