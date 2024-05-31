import Products from "@/components/all_product/Products";
import Banner from "@/components/banner/Banner";
import PageButton from "@/components/page_button/PageButton";
import Head from "next/head";

const HomePage = async () => {
  <Head>
    ... the rest of your HTML head ...
    <link rel="icon" href="/favicon.ico" />
  </Head>;

  return (
    <main className="min-h-screen">
      <Banner />
      <PageButton />
      <Products />
    </main>
  );
};

export default HomePage;
