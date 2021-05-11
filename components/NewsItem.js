import React from "react";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";

const NewsItem = ({ newsItem }) => {
  return (
    <div>
      <Link href={`/guides/${newsItem.id}`}>
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
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  {newsItem.titulo}
                </h2>

                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      class="rounded-circle border border-white"
                    />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <ArrowRight color="royalblue" />
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <ArrowRight color="royalblue" />
                    <small>3d</small>
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
