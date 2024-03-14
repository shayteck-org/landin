import { Dispatch, SetStateAction } from "react";
export type SharedContextModel = {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
};
export interface BasicElemetProps {
  className?: string;
  id?: string;
}

export type SharedAttributes = {
  elementId: string;
  data: {
    value: string;
    path?: string;
    image_url?: string;
    style?: {
      width?: number;
      height?: number;
      color: string;
      bgColor: string;
      font: string;
    };
  };
  mode: "stable" | "edit";
};

export enum onClickModel {
  openDialog1 = "openDialog1",
  openDialog2 = "openDialog2",
  openDialog3 = "openDialog3",
  openDialog4 = "openDialog4",
}
