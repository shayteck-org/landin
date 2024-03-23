type ObjectProps = {
  key: string;
  type: "image" | "typography" | "link" | "button";
};

const objectMaker = (
  key: string,
  type: ObjectProps["type"],
  form: any
): object => {
  let data: any = {};

  switch (type) {
    case "image":
      data = { image_url: form.getFieldValue(key) };
      break;
    case "typography":
      data = { value: form.getFieldValue(key) };
      break;
    case "link":
      data = { path: form.getFieldValue(key) };
      break;
    case "button":
      data = { value: form.getFieldValue(key) };
      break;
    default:
      throw new Error("Unknown type provided");
  }

  return {
    data,
  };
};

const useObjectMaker = (form: any) => {
  return ({ key, type }: ObjectProps) => {
    return objectMaker(key, type, form);
  };
};

export default useObjectMaker;
