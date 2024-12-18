import type { Metadata } from "next";

import "./globals.css";
import styles from "./page.module.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata: Metadata = {
  title: "MostRecentElevation calculator",
  description: "calculate elevation based on coordinates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={styles.page}>
    <div>
      <MainHeader />
      {children}
    </div>
    </body>
    </html>
  );
}
