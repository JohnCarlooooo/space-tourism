import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import PageWrapper from "@/components/wrappers/PageWrapper";

const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bellefair",
});

const barlow = Barlow({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-barlowCondensed",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`/rocket-icon.png`} sizes="any" />
      </head>
      <body
        className={`bg-black  ${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable} font-barlow body text-white leading-none`}
        suppressHydrationWarning={true}
      >
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
