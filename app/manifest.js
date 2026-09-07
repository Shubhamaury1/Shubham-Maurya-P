export default function manifest() {
  return {
    name: "Shubham Maurya",
    short_name: "Shubham Maurya",
    description:
      "Portfolio of Shubham Maurya — Full-Stack Software Developer specializing in React, Next.js, Node.js, .NET, and Python.",
    start_url: "/",
    display: "standalone",
    background_color: "#f0f9ff",
    theme_color: "#0369a1",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/s1.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
