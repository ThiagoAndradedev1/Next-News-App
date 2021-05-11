import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Navbar />

      <div className="container mt-4">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
