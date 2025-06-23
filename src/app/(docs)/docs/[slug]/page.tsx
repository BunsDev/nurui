import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";
import { getMDXComponents } from "../../../../../mdx-components";
import { Metadata } from "next";
import remarkGfm from "remark-gfm";

interface AsyncParams {
  params: Promise<{ slug: string }>;
}

interface Frontmatter {
  title: string;
  description: string;
  creator: string;
}

export async function generateMetadata({
  params,
}: AsyncParams): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "docs",
    `${slug}.mdx`,
  );

  const content = await fs.readFile(filePath, "utf-8");

  const { frontmatter } = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    title: `${frontmatter?.title} | Bytenexia`,
    description: frontmatter?.description,
    creator: frontmatter?.creator,
  };
}

export async function generateStaticParams() {
  const files = await fs.readdir(
    path.join(process.cwd(), "src", "content", "docs"),
  );

  const paths = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));

  return paths;
}

const Page = async ({ params }: AsyncParams) => {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "docs",
    `${slug}.mdx`,
  );
  const rawMDX = await fs.readFile(filePath, "utf-8");
  const { content } = await compileMDX<Frontmatter>({
    source: rawMDX,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
    components: getMDXComponents({}),
  });

  return <div>{content}</div>;
};

export default Page;
