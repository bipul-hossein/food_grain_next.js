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
      <body suppressHydrationWarning={true} className="font-display bg-red-50">
        <Layout>
          <div className="min-h-screen lg:w-9/12 mx-auto bg-white flex flex-col md:flex-row">
            <AdminNav className=""/>
            <div className="mt-4 w-full md:w-[80%] mx-3">{children}</div>
          </div>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
