import Education from "../../src/Page/Education.jsx";

export const metadata = {
  title: "Education & Qualifications",
  description:
    "Explore Shubham Maurya's educational background, degrees, certifications, and academic achievements in Computer Science and Software Engineering.",
  alternates: {
    canonical: "/education",
  },
  openGraph: {
    title: "Education & Qualifications | Shubham Maurya",
    description:
      "Explore Shubham Maurya's educational background, degrees, and industry certifications.",
    url: "/education",
  },
};

export default function Page() {
  return <Education />;
}
