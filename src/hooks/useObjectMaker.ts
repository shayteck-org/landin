import { FormInstance } from "antd";

type ObjectProps = {
  key: string;
  type: "image" | "typography" | "link" | "button";
};

const objectMaker = (
  key: string,
  type: ObjectProps["type"],
  form: FormInstance,
  dataToHold?: any
): { data: { value: string } } => {
  let data: any = {};

  switch (type) {
    case "image":
      if (dataToHold) {
        data = {
          ...dataToHold[key]?.data,
          image_url: form.getFieldValue(key),
        };
        break;
      }
      data = { image_url: form.getFieldValue(key) };
      break;
    case "typography": {
      if (dataToHold) {
        data = {
          ...dataToHold[key]?.data,
          value: form.getFieldValue(key),
        };
        break;
      }
      data = { value: form.getFieldValue(key) };
      break;
    }
    case "link": {
      if (dataToHold) {
        data = {
          ...dataToHold[key]?.data,
          path: form.getFieldValue(key),
        };
        break;
      }
      data = { path: form.getFieldValue(key) };
      break;
    }
    case "button": {
      if (dataToHold) {
        data = {
          ...dataToHold[key]?.data,
          value: form.getFieldValue(key),
        };
        break;
      }
      data = { value: form.getFieldValue(key) };
      break;
    }
    default:
      throw new Error("Unknown type provided");
  }

  if (dataToHold)
    return {
      ...dataToHold[key],
      data,
    };

  return {
    data,
  };
};

const useObjectMaker = (form: any, dataToHold?: any) => {
  return ({ key, type }: ObjectProps) => {
    return objectMaker(key, type, form, dataToHold);
  };
};

export default useObjectMaker;
