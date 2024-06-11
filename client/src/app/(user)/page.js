import Products from "@/components/all_product/Products";
import Banner from "@/components/banner/Banner";
import PageButton from "@/components/page_button/PageButton";
import Head from "next/head";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/actions";

const HomePage = async () => {
  const session = await getServerSession(options);
  console.log(session, "sdfsdfs");

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
