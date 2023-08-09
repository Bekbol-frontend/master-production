import path from "path";
import webpack from "webpack";

import { BuildENV, BuildPaths } from "./config/build/@types/configType";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildENV) => {
  const paths: BuildPaths = {
    entry: {
      index: path.resolve(__dirname, "src", "index.tsx"),
    },
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    devServer: path.resolve(__dirname, "build"),

    components: path.resolve(__dirname, "src/components/"),
    pages: path.resolve(__dirname, "src/pages/"),
    styles: path.resolve(__dirname, "src/styles/"),
    store: path.resolve(__dirname, "src/store/"),
    context: path.resolve(__dirname, "src/context/"),
    hooks: path.resolve(__dirname, "src/hooks/"),
    model: path.resolve(__dirname, "src/model/"),
    helpers: path.resolve(__dirname, "src/helpers/"),
  };

  const mode = env.mode || "development";
  const port = env.port || 8080;
  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
