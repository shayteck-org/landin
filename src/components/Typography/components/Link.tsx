import React from "react";
import { Link as RrdLink } from "react-router-dom";
import { LinkModal } from "../model";
import routes from "../../../config/routes/routes";

const Link: React.FC<LinkModal> = ({ data, elementId }) => {
  return <RrdLink to={data.path || routes[0].path}>{data.value}</RrdLink>;
};

export default Link;
