import Layout from "@/components/layout/Layout";
import Footer from "@/components/footer/Footer";
import AdminNav from "@/components/navbar/AdminNav";
import "../../styles/globals.css";

export const metadata = {
  title: "FoodGrain Admin panel || Best place to shop",
  description: "Your trusted online shopping store",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-display">
        <Layout>
          <div className="min-h-screen flex flex-row">
            <AdminNav />
            <div className="mx-3 mt-8 md:w-[80%] md:mx-auto">{children}</div>
          </div>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
