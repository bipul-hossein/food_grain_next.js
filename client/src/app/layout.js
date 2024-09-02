import "../styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Layout from "@/components/layout/Layout";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "FoodGrain Organic Shopping Store || Best place to shop",
  description: "Your trusted online shopping store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="font-display">
        <Layout>
          <Navbar />
          <div className="mx-3 md:w-[80%] md:mx-auto">{children}</div>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
