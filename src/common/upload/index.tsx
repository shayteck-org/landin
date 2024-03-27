import React, { Dispatch, SetStateAction, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { GetProp, UploadProps } from "antd";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt5M = file.size / 1024 / 1024 < 5;
  if (!isLt5M) {
    message.error("Image must smaller than 5MB!");
  }
  return isLt5M && isJpgOrPng;
};

type Props = UploadProps & {
  imageUrlProps?: string;
  setImageUrl: Dispatch<SetStateAction<string | undefined>>;
};

const UploadPhoto: React.FC<Props> = ({
  imageUrlProps,
  setImageUrl,
  ...props
}) => {
  const [loading, setLoading] = useState(false);

  const handleChange: Props["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        console.log(url);

        setImageUrl(url);
        setLoading(false);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
    </button>
  );

  return (
    <Upload
      customRequest={(info) => {
        getBase64(info.file as FileType, (url) => {
          setImageUrl(url);
        });
      }}
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      beforeUpload={beforeUpload}
      onChange={handleChange}
      {...props}
    >
      {imageUrlProps ? (
        <img
          src={imageUrlProps}
          alt="avatar"
          style={{ width: "95%", aspectRatio: 1, borderRadius: 6 }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default UploadPhoto;
