import { SharedAttributes } from "@/types/model";

export type TypographyModel = SharedAttributes;

export interface TitleModal extends TypographyModel {
  level: number;
}

export interface LinkModal extends TypographyModel {}

export interface TextModel extends TypographyModel {
  textType: "paragraph" | "span";
}
