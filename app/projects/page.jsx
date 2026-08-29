import Project from "../../src/Page/Project.jsx";

export const metadata = {
  title: "Projects",
  description:
    "Browse software projects, full-stack applications, machine learning projects, and data tools built by Shubham Maurya.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Portfolio | Shubham Maurya",
    description:
      "Browse full-stack web applications, machine learning models, and software engineering projects by Shubham Maurya.",
    url: "/projects",
  },
};

export default function Page() {
  return <Project />;
}
