import Layout from "@/components/layout/Layout";
import Footer from "@/components/footer/Footer";
import AdminNav from "@/components/admin_components/AdminNav";
import "../../styles/globals.css";

export const metadata = {
  title: "FoodGrain Admin panel || Best place to shop",
  description: "Your trusted online shopping store",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-display bg-red-50">
        <Layout>
          <div className="min-h-screen w-9/12 mx-auto bg-white flex flex-row">
            <AdminNav />
            <div className="mt-4 md:w-[80%] mx-3">{children}</div>
          </div>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
