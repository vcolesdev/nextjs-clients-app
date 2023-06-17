const removeImports = require("next-remove-imports")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: [removeImports]
};

module.exports = nextConfig;
