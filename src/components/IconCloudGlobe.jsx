import { IconCloud } from "./magicui/icon-cloud";

const slugs = [
  "javascript",
  "figma",
  "html5",
  "css3",
  "csharp",
  "firebase",
  "vercel",
  "jira",
  "github",
  "mysql",
  "python",
  "unity",
  "cplusplus",
  "supabase",
  "tailwindcss",
  "dotnetcore",
  "react",
  "bootstrap",
  "visualstudio",
  "vscode",
  "xd"
];

export default function IconCloudGlobe() {
  const images = slugs.map(
    (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`,
  );

  return (
    <IconCloud images={images} />
  );
}
