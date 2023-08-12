import { About, Home } from "@pages";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  HOME = "home",
  ABOUT = "about",
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: routePath.home,
    element: <Home />,
  },
  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <About />,
  },
};
