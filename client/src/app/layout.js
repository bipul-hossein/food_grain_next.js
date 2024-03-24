import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Layout from "@/components/layout/Layout";
import PageButton from "@/components/page_button/PageButton";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FoodGrain Organic Shopping Store || Best place to shop",
  description: "Your trusted online shopping store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-display">
        <Layout>
          <Navbar />
          <PageButton />
          <div className="w-full md:w-[80%] md:mx-auto">{children}</div>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
