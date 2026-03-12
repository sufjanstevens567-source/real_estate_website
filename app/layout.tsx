import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Property Videos for Irish Estate Agencies | Built from Listing Photos",
  description:
    "Premium property videos for Irish estate agencies, built from listing photos. Suitable for listings, socials, vendor pitches, and selected concept-led property marketing.",
  keywords: [
    "property marketing Ireland",
    "estate agency video",
    "listing video",
    "property video from photos",
    "Irish estate agencies",
  ],
  openGraph: {
    title: "Property Motion Studio",
    description:
      "Premium property videos built from supplied listing imagery for Irish estate agencies.",
    siteName: "Property Motion Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Motion Studio",
    description:
      "Premium property videos built from listing photos for Irish estate agencies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

