import Products from "@/components/all_product/Products";
import Banner from "@/components/banner/Banner";
import PageButton from "@/components/page_button/PageButton";

export const metadata = {
  title: 'Home page',
}

const HomePage = async () => {

  return (
    <main className="min-h-screen">
      <Banner />
      <PageButton />
      <Products />
    </main>
  );
};

export default HomePage;
