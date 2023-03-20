const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  distDir: './.next',
  output: "standalone",
  basePath: "",
  cleanDistDir: true,
  experimental: {
    // this includes files from the monorepo base two directories up
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
};
