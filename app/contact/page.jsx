import ContactMe from "../../src/Page/ContactMe.jsx";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Shubham Maurya for full-stack software engineering, web development opportunities, collaborations, and inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Shubham Maurya",
    description:
      "Get in touch with Shubham Maurya for full-stack software development and engineering opportunities.",
    url: "/contact",
  },
};

export default function Page() {
  return <ContactMe />;
}
