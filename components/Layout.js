import Head from "next/head";

import Navbar from "./Navbar";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      <div className="container mt-2">{children}</div>
    </div>
  );
};

export default Layout;
