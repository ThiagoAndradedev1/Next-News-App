import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "@styles/Highlights.module.css";

const Highlights = () => {
  return (
    <div>
      <>
        <div className="section_title">
          <h1 className="text-center mb-5">Notícias em Destaque</h1>
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <Link href={`/news/7`}>
            <div className="col">
              <div className="card text-white">
                <div className={styles.inner}>
                  <Image
                    width="350px"
                    height="650px"
                    src="/images/outriders.560.webp"
                    className="card-img"
                    alt="outriders"
                  />
                  <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                    <h4 className="card-title">The New Monster Game</h4>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href={`/news/8`}>
            <div className="col">
              <div className="card text-white">
                <div className={styles.inner}>
                  <Image
                    width="350px"
                    height="650px"
                    src="/images/magnamalo.560.webp"
                    className="card-img"
                    alt="magnamalo"
                  />
                  <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                    <h4 className="card-title">Monster Hunter Rise Game</h4>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href={`/news/9`}>
            <div className="col">
              <div className="card text-white">
                <div className={styles.inner}>
                  <Image
                    width="350px"
                    height="650px"
                    src="/images/keanu-reeves.560.webp"
                    className="card-img"
                    alt="keanu"
                  />
                  <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                    <h4 className="card-title">The New Samurai Game</h4>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href={`/news/10`}>
            <div className="col">
              <div className="card text-white">
                <div className={styles.inner}>
                  <Image
                    width="350px"
                    height="650px"
                    src="/images/demon-slayer.560.webp"
                    className="card-img"
                    alt="demon"
                  />
                  <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                    <h4 className="card-title">Kimetsu no Yaiba New Game</h4>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </>
    </div>
  );
};

export default Highlights;
