export type TypeMode = "development" | "production";

export interface BuildPaths {
  entry: {
    [index: string]: string;
  };
  build: string;
  html: string;
  devServer: string;

  components: string;
  pages: string;
  styles: string;
  store: string;
  context: string;
  hooks: string;
  model: string;
  helpers: string;
}

export interface BuildOptions {
  mode: TypeMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface BuildENV {
  mode: TypeMode;
  port: number;
}
