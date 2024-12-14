import { ReactElement } from "react";

export * from "./banner";
export * from "./product";
export * from "./cart";

export type TNavLinkData = {
  url: string;
  label: string;
  icon?: ReactElement;
};
