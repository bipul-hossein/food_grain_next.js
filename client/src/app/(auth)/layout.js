import Layout from "@/components/layout/Layout";
import "../../styles/globals.css";

export const metadata = {
  title: "Authentication",
  description: "Foodgrain Authentication Page is here....",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <Layout>
        <body suppressHydrationWarning={true}>{children}</body>
      </Layout>
    </html>
  );
}
