import path from "path";
import webpack from "webpack";

import {
  BuildAlias,
  BuildENV,
  BuildPaths,
} from "./config/build/@types/configType";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildENV) => {
  const paths: BuildPaths = {
    entry: {
      index: path.resolve(__dirname, "src", "index.tsx"),
    },
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    devServer: path.resolve(__dirname, "build"),
  };

  const alias: BuildAlias = {
    app: path.resolve(__dirname, "src/app"),
    entities: path.resolve(__dirname, "src/entities"),
    features: path.resolve(__dirname, "src/features"),
    pages: path.resolve(__dirname, "src/pages"),
    processes: path.resolve(__dirname, "src/processes"),
    shared: path.resolve(__dirname, "src/shared"),
    widgets: path.resolve(__dirname, "src/widgets"),
  };

  const mode = env.mode || "development";
  const port = env.port || 8080;
  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    alias,
  });

  return config;
};
