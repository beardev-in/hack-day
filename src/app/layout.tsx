"use client"; // Ensure the component is treated as a Client Component

import "../styles/globals.css";
import { Inter } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";  // Adjust path as necessary

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Global Hackathon Series",
//   description: "5000 DEVELOPERS. 7 CITIES. 1 GRAND FINAL.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
          <CustomCursor />
          {children}
          <BackToTop />
        </body>
      </Provider>
    </html>
  );
}
