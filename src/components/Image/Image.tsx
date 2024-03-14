import React from "react";
import { ImageModel } from "./model";

const Image: React.FC<
  ImageModel & React.ImgHTMLAttributes<HTMLImageElement>
> = ({ data, elementId, ...rest }) => {
  return (
    <img src={data.image_url} alt={`image with ${elementId} id`} {...rest} />
  );
};
export default Image;
