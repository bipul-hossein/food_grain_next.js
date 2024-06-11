import "../../styles/globals.css";
export const metadata = {
  title: "Register",
  description: "Foodgrain Register page here ...",
};

export default function RegisterLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
