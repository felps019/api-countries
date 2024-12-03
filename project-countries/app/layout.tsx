import type { Metadata } from "next";
import { Noto_Sans} from "next/font/google"
import "./globals.css";


const notoSans = Noto_Sans({
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Project-Countries",
  description: "Flags of the world"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}