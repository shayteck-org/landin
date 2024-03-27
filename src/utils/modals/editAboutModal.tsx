import { editMode } from "@/types/model";
import styles from "@/styles/editModal.module.scss";
import { Button, Form, Input, Modal, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import UploadPhoto from "@/common/upload";
import useObjectMaker from "@/hooks/useObjectMaker";

const EditAboutModal: React.FC<editMode> = ({
  edit,
  setEdit,
  setMode,
  mode,
}) => {
  const [modal, toggle] = useState<boolean>(false);
  const [imageUrlOne, setImageUrlOne] = useState<string>("");
  const [imageUrlTwo, setImageUrlTwo] = useState<string>("");
  const [imageUrlThree, setImageUrlThree] = useState<string>("");
  const [form] = useForm();

  const editSectionObject = useObjectMaker(form, edit);

  useEffect(() => {
    toggle(mode === "edit" ? true : false);
    setImageUrlOne(edit?.imageOne.data.image_url);
    setImageUrlTwo(edit?.imageTwo.data.image_url);
    setImageUrlThree(edit?.imageThree.data.image_url);
  }, [mode]);

  function stateHandler(status: "cancel" | "submit") {
    switch (status) {
      case "submit": {
        setEdit({
          ...edit,
          sectionTitle: editSectionObject({
            key: "sectionTitle",
            type: "typography",
          }),
          descriptionOne: editSectionObject({
            key: "descriptionOne",
            type: "typography",
          }),
          descriptionTwo: editSectionObject({
            key: "descriptionTwo",
            type: "typography",
          }),
          imageOne: {
            data: {
              ...edit.imageOne.data,
              image_url: imageUrlOne,
            },
          },
          imageTwo: {
            data: {
              ...edit.imageTwo.data,
              image_url: imageUrlTwo,
            },
          },
          imageThree: {
            data: {
              ...edit.imageThree.data,
              image_url: imageUrlThree,
            },
          },
        });
        return setMode("stable");
      }
      case "cancel": {
        return setMode("stable");
      }
      default:
        return;
    }
  }

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  if (edit === null) return <Spin fullscreen />;
  return (
    <Modal
      title={"تغییر اطلاعات درباره ما"}
      open={modal}
      onCancel={() => stateHandler("cancel")}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Row>
        <Form
          form={form}
          initialValues={{
            sectionTitle: edit?.sectionTitle.data?.value,
            descriptionOne: edit?.descriptionOne.data?.value,
            descriptionTwo: edit?.descriptionTwo.data?.value,
          }}
          name="sectionEditor"
          onFinish={() => stateHandler("submit")}
          requiredMark
          autoComplete="off"
          layout="vertical"
          className={styles.editor}
          style={{ width: "100%", paddingTop: 12 }}
        >
          <Form.Item
            label={"عنوان"}
            name={"sectionTitle"}
            wrapperCol={{ span: 24 }}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>
          <Form.Item
            label={"توضیحات بالای باکس"}
            name={"descriptionOne"}
            wrapperCol={{ span: 24 }}
          >
            <Input.TextArea
              showCount
              maxLength={160}
              rows={4}
              placeholder="مقدار جدید را وارد کنید"
            />
          </Form.Item>

          <Form.Item
            label={"توضیحات پایین باکس"}
            name={"descriptionTwo"}
            wrapperCol={{ span: 24 }}
          >
            <Input.TextArea
              showCount
              maxLength={160}
              rows={4}
              placeholder="مقدار جدید را وارد کنید"
            />
          </Form.Item>

          <Form.Item
            getValueFromEvent={normFile}
            valuePropName="fileList"
            label={"آپلود تصویر اول"}
            name={"image1"}
          >
            <UploadPhoto
              setImageUrl={setImageUrlOne}
              imageUrlProps={imageUrlOne}
              showUploadList={false}
              maxCount={1}
            />
          </Form.Item>
          <Form.Item
            getValueFromEvent={normFile}
            valuePropName="fileList"
            label={"آپلود تصویر دوم"}
            name={"image2"}
          >
            <UploadPhoto
              setImageUrl={setImageUrlTwo}
              imageUrlProps={imageUrlTwo}
              showUploadList={false}
              maxCount={1}
            />
          </Form.Item>
          <Form.Item
            getValueFromEvent={normFile}
            valuePropName="fileList"
            label={"آپلود تصویر سوم"}
            name={"image3"}
          >
            <UploadPhoto
              setImageUrl={setImageUrlThree}
              imageUrlProps={imageUrlThree}
              showUploadList={false}
              maxCount={1}
            />
          </Form.Item>

          <Button
            htmlType="submit"
            size="middle"
            type="primary"
            style={{ width: "100%" }}
          >
            اعمال تغییرات
          </Button>
        </Form>
      </Row>
    </Modal>
  );
};

export default EditAboutModal;
