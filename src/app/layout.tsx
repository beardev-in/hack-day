import "../styles/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Global Hackathon Series",
  description: "5000 DEVELOPERS. 7 CITIES. 1 GRAND FINAL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        {children}
        {/* <Footer /> */}
        <BackToTop />
      </body>
    </html>
  );
}
