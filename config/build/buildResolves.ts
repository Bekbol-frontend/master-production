import webpack from "webpack";
import { BuildOptions } from "./@types/configType";

export function buildResolves(options: BuildOptions): webpack.ResolveOptions {
  const { paths } = options;

  const { components, pages, context, hooks, store, styles, model, helpers } =
    paths;

  return {
    extensions: ["", ".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@components": components,
      "@pages": pages,
      "@context": context,
      "@hooks": hooks,
      "@store": store,
      "@model": model,
      "@helpers": helpers,
      "@styles": styles,
    },
  };
}
