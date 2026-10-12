import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { compile } from "@mdx-js/mdx";
import matter from "gray-matter";

const CONTENT_DIRS = [
  "docs",
  "blogs",
  "case-studies",
  "projects",
];

async function findMdxFiles(directory) {
  let entries;

  try {
    entries = await readdir(directory, {
      withFileTypes: true,
    });
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }

  const files = [];

  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findMdxFiles(filePath)));
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".mdx")
    ) {
      files.push(filePath);
    }
  }

  return files;
}

async function main() {
  const files = (
    await Promise.all(CONTENT_DIRS.map(findMdxFiles))
  ).flat();

  if (files.length === 0) {
    throw new Error("No MDX files found.");
  }

  let failures = 0;

  for (const file of files) {
    try {
      const source = await readFile(file, "utf8");
      const { content } = matter(source);

      await compile(content, { filepath: file });

      console.log(`PASS ${file}`);
    } catch (error) {
      failures++;
      console.error(`FAIL ${file}`);
      console.error(error.message);
    }
  }

  console.log(
    `\nResult: ${files.length - failures}/${files.length} files passed.`,
  );

  if (failures > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
