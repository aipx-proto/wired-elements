import fs from "fs/promises";
import path from "path";

async function main() {
  // Iterate files in ../docs/**.md
  const files = await fs.readdir(path.resolve("docs"));

  await fs.mkdir(path.resolve("dist"), { recursive: true });

  const transformedFiles = await Promise.all(
    files.map(async (file) => {
      const fullpath = path.resolve(`docs/${file}`);
      const mdRaw = await fs.readFile(fullpath, "utf-8");

      const transform = pipe(removePreamble, removePostamble, removeMarketingLine, removeUsagePreamble, simplifyImport, normalizeSpaces);

      const output = transform(mdRaw);

      await fs.writeFile(path.resolve("dist", file), output);
    })
  );
}

function removePreamble(input) {
  // remove all text before "#"" (first heading)
  // make sure to handle multi-line texts before the heading
  return input.replace(/.*?#/s, "#");
}

function removePostamble(input) {
  // remove all text after "## License", inclusive.
  return input.replace(/## License.*/s, "");
}

function removeMarketingLine(input) {
  // remove the entire line that contains the substring "[wiredjs.com]"
  // make sure to remove the text before and after the substring
  return input.replace(/.*\[wiredjs\.com\].*/, "");
}

function removeUsagePreamble(input) {
  // remove all text from the line below ## Usage to the line above "Import module"
  return input.replace(/## Usage.*\n.*Import module/s, "## Usage\n\nImport module");
}

function simplifyImport(input) {
  // remove all the text that matches multiline pattern `// or\nimport...\n\`\`\``
  return input.replace(/(\/\/ or\nimport.*?```)/s, "```").replace(/Or load.*?```html.*?```/s, "");
}

function normalizeSpaces(input) {
  // combine 2+ newlines into 2 newlines, then trim begin/end
  return input.replace(/\n{2,}/g, "\n\n").trim();
}

function pipe(...fns) {
  return fns.reverse().reduce(
    (f, g) =>
      (...args) =>
        f(g(...args))
  );
}

main();
