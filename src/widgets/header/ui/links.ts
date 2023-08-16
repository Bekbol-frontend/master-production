import { routePath } from "@shared/config";

interface ILink {
  to: string;
  linkName: string;
}

export const appLinks: ILink[] = [
  {
    to: routePath.main,
    linkName: "home",
  },
  {
    to: routePath.about,
    linkName: "about",
  },
];
