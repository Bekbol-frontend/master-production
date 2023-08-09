import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./@types/configType";

export function buildDevServer(options: BuildOptions): Configuration {
  const { paths, port } = options;

  const { devServer } = paths;

  return {
    static: {
      directory: devServer,
    },
    compress: true,
    port,
    open: true,
    hot: true,
    historyApiFallback: true
  };
}
