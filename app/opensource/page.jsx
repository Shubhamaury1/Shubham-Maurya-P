import OpenSource from "../../src/Page/OpenSource.jsx";

export const metadata = {
  title: "Open Source",
  description:
    "Explore open source contributions, research repositories, and machine learning projects by Shubham Maurya.",
  alternates: {
    canonical: "/opensource",
  },
  openGraph: {
    title: "Open Source | Shubham Maurya",
    description:
      "Explore open source contributions and research projects created by Shubham Maurya.",
    url: "/opensource",
  },
};

export default function Page() {
  return <OpenSource />;
}
