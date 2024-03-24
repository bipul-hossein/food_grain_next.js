import Products from "@/components/all_product/Products";
import Banner from "@/components/banner/Banner";
import ReduxText from "@/components/redux_text/ReduxText";

const HomePage = async () => {
  return (
    <main className="min-h-screen">
      <Banner />
      <Products />
      <ReduxText />
    </main>
  );
};

export default HomePage;
