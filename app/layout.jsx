import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import Navbar from "../src/Component/Navbar.jsx";
import ScrollToTopButton from "../src/Component/ScrollToTopButton.jsx";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontSignature = Caveat({
  subsets: ["latin"],
  variable: "--font-signature",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shubham Maurya | Full-Stack Developer",
    template: "%s | Shubham Maurya",
  },
  description:
    "Shubham Maurya is a Full-Stack Software Developer specializing in React, Next.js, Node.js, .NET, Python, MySQL, MongoDB and scalable web applications.",
  keywords: [
    "Shubham Maurya",
    "Full Stack Developer",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Python Developer",
    "Web Developer India",
  ],
  authors: [{ name: "Shubham Maurya" }],
  creator: "Shubham Maurya",
  publisher: "Shubham Maurya",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shubham Maurya Portfolio",
    title: "Shubham Maurya | Full-Stack Developer",
    description:
      "Portfolio of Shubham Maurya — Full-Stack Software Developer building scalable web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Maurya | Full-Stack Developer",
    description:
      "Portfolio of Shubham Maurya — Full-Stack Software Developer.",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/s1.png", type: "image/png" },
    ],
    shortcut: "/s1.png",
    apple: "/s1.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "og5Hfk4RUsxjyxgbUOMooocG6Q9_w2s_6g3JKAtfBC8",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Shubham Maurya",
        jobTitle: "Full-Stack Software Developer",
        url: siteUrl,
        sameAs: [
          "https://github.com/Shubhamaury1",
          "https://www.linkedin.com/in/shubham-maurya-4a275a232/",
        ],
        knowsAbout: [
          "Full-Stack Web Development",
          "React",
          "Next.js",
          "Node.js",
          ".NET",
          "Python",
          "MongoDB",
          "MySQL",
          "Machine Learning",
          "Data Analysis",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Shubham Maurya Portfolio",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${fontSans.variable} ${fontSignature.variable}`}>
      <body className="font-sans antialiased bg-sky-50 text-[#092E53]">
        <Navbar />
        <ScrollToTopButton />
        <main>{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

