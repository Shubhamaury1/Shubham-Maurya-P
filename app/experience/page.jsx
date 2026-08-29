import Experience from "../../src/Page/Experience.jsx";

export const metadata = {
  title: "Experience",
  description:
    "Discover Shubham Maurya's professional work experience and internships in full-stack development, software engineering, and data analytics.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Work & Internship Experience | Shubham Maurya",
    description:
      "Professional work experience and internships of Shubham Maurya across software development and data solutions.",
    url: "/experience",
  },
};

export default function Page() {
  return <Experience />;
}
