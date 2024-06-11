import Layout from "@/components/layout/Layout";
import "../../styles/globals.css";

export const metadata = {
  title: "Login",
  description: "Foodgrain Login page here ...",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <Layout>
        <body suppressHydrationWarning={true}>{children}</body>
      </Layout>
    </html>
  );
}
