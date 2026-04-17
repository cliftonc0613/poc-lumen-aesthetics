import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Silence multi-lockfile workspace root warning — lock this project's
  // tracing root to its own directory.
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
