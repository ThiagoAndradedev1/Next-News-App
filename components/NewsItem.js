import React from "react";
import Link from "next/link";
import Image from "next/image";

import { GeoAltFill, Calendar } from "react-bootstrap-icons";

const NewsItem = ({ newsItem }) => {
  return (
    <div>
      <Link href={`/news/${newsItem.id}`}>
        <a>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{
                backgroundImage: `url(${
                  newsItem.img ?? "/images/placeholder.jpg"
                })`,
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-5 display-6 lh-1 fw-bold box-shadow">
                  {newsItem.titulo}
                </h2>

                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <Image
                      src={newsItem.autorImg}
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <GeoAltFill />
                    <small className="box-shadow-date pl-5 spacing-location">
                      {newsItem.location}
                    </small>
                  </li>
                  <li className="d-flex align-items-center">
                    <Calendar />
                    <small className="box-shadow-date pl-5 spacing-calendar">
                      {newsItem.data}
                    </small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default NewsItem;
