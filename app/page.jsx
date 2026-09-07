import Home from "../src/Page/Home.jsx";

export const metadata = {
  title: "Shubham Maurya | Full-Stack Developer & Software Engineer",
  description:
    "Explore the portfolio of Shubham Maurya — Full-Stack Developer skilled in React, Next.js, Node.js, Python, .NET, MySQL, MongoDB, and modern web application development.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shubham Maurya | Full-Stack Developer & Software Engineer",
    description:
      "Explore the portfolio of Shubham Maurya — Full-Stack Developer building scalable web applications and data solutions.",
    url: "/",
    siteName: "Shubham Maurya",
  },
};

export default function Page() {
  return <Home />;
}
