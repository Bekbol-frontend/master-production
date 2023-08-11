export type TypeMode = "development" | "production";

export interface BuildPaths {
  entry: {
    [index: string]: string;
  };
  build: string;
  html: string;
  devServer: string;
}

export interface BuildAlias {
  app: string;
  entities: string;
  features: string;
  pages: string;
  shared: string;
  widgets: string;
  processes: string;
}

export interface BuildOptions {
  mode: TypeMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  alias: BuildAlias;
}

export interface BuildENV {
  mode: TypeMode;
  port: number;
}
