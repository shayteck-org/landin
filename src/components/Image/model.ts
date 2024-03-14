import { SharedAttributes } from "@/types/model";

export interface ImageModel extends SharedAttributes {
  data: {
    value: string;
    image_url: string;
  };
}
