export type TypographyModel = {
  elementId: number;
  data: {
    value: string;
  };
};

export interface TitleModal extends TypographyModel {
  level: number;
}

export interface LinkModal extends TypographyModel {
  data: {
    path: string;
    value: string;
  };
}

export interface TextModel extends TypographyModel {
  textType: "paragraph" | "span";
}
