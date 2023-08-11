import webpack from "webpack";
import { BuildOptions } from "./@types/configType";

export function buildResolves(options: BuildOptions): webpack.ResolveOptions {
  const { alias } = options;

  const { app, entities, features, pages, processes, shared, widgets } = alias;

  return {
    extensions: ["", ".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@app": app,
      "@entities": entities,
      "@features": features,
      "@pages": pages,
      "@processes": processes,
      "@shared": shared,
      "@widgets": widgets,
    },
  };
}
