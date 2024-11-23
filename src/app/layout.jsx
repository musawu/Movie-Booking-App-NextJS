import localFont from "next/font/local";
import "./globals.css";
import RootLayout from "./components/RootLayout";


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
