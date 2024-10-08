import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mAtin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-[#111]/80 font-PoppinsRegular">{children}</body>
    </html>
  );
}
