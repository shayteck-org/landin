import { Dispatch, SetStateAction } from "react";

export type EditProvider = {
  mode: Mode;
  setMode: Dispatch<SetStateAction<Mode>>;
  state: any;
  setState: Dispatch<SetStateAction<any>>;
};

export type SharedContextModel = {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
};
export interface BasicElemetProps {
  className?: string;
  id?: string;
}

export type SharedAttributes = {
  elementId?: string;
  data: {
    value?: string;
    path?: string;
    image_url?: string;
    style?: {
      width?: number;
      height?: number;
      color?: string;
      bgColor?: string;
      font?: string;
    };
  };
};

export type SharedSection = {
  components: any;
};

export enum onClickModel {
  openDialog1 = 1,
  openDialog2 = 2,
  openDialog3 = 3,
  openDialog4 = 4,
}

export type Mode = "stable" | "edit";

export type editMode = {
  edit: any;
  setEdit: Dispatch<SetStateAction<any>>;
  mode?: Mode;
  setMode: Dispatch<SetStateAction<Mode>>;
  defaultValues?: any;
};
