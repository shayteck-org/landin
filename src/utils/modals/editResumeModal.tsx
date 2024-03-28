import { editMode } from "@/types/model";
import styles from "@/styles/editModal.module.scss";
import {
  Alert,
  Button,
  Col,
  Collapse,
  ColorPicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Rate,
  Row,
  Select,
  Spin,
  Upload,
  message,
} from "antd";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import PreviewItemDetails from "@/common/previewItem";
import UploadPhoto from "@/common/upload";
import useObjectMaker from "@/hooks/useObjectMaker";
import PreviewResumeDetails from "@/common/previewItem/PreviewResume";

let freeNestedModalData = { image: { data: { image_url: "" } } };

function checkImageHeight(index: number, length: number): string {
  if (length > 4 && index % 2 === 0) {
    return "بیشینه ارتفاع نمایش 300 پیکسل میباشد.";
  } else if (length <= 4 && index % 3 === 0) {
    return "بیشینه ارتفاع نمایش 300 پیکسل میباشد.";
  }
  return "بیشینه ارتفاع نمایش 500 پیکسل میباشد.";
}

const EditResumeModal: React.FC<editMode> = ({
  edit,
  setEdit,
  setMode,
  mode,
}) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [modal, toggle] = useState<boolean>(false);
  const [nestedModal, toggleNestedModal] = useState<{
    modal: boolean;
    id: string;
    data: any;
  }>({
    data: freeNestedModalData,
    modal: false,
    id: "-1",
  });

  const [allChildren, setAllChildren] = useState<any[]>(edit?.content || []);
  const [form] = useForm();
  const [nestedForm] = useForm();

  const editSectionObject = useObjectMaker(form, edit);
  const createSectionObject = useObjectMaker(nestedForm, edit?.content);

  useEffect(() => {
    toggle(mode === "edit" ? true : false);
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
          title: editSectionObject({
            key: "title",
            type: "typography",
          }),
          content: allChildren,
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

  const addNewServices = async (values: any) => {
    if (nestedModal.id !== "0") {
      const childIndex = allChildren.findIndex(
        (child) => child.data.id === nestedModal.id
      );
      if (childIndex !== -1) {
        const updatedChild = {
          ...allChildren[childIndex],
          data: {
            id: nestedModal.id,
            title: createSectionObject({ key: "title", type: "typography" }),
            description: createSectionObject({
              key: "description",
              type: "typography",
            }),
            image: {
              data: {
                image_url: imageUrl,
              },
            },
          },
        };

        setAllChildren((prevChildren) => {
          const updatedChildren = [...prevChildren];
          updatedChildren[childIndex] = updatedChild;
          return updatedChildren;
        });
      }
    } else {
      const newChild = {
        data: {
          title: createSectionObject({ key: "title", type: "typography" }),
          description: createSectionObject({
            key: "description",
            type: "typography",
          }),
          image: {
            data: {
              image_url: imageUrl,
            },
          },
          id: Date.now().toString(),
        },
      };
      setAllChildren((prev: any) => [...prev, newChild]);
    }
    nestedForm.resetFields();
    setImageUrl("");
    toggleNestedModal({ id: "-1", modal: false, data: freeNestedModalData });
  };

  useEffect(() => {
    const { id } = nestedModal;

    if (id !== "-1" && id !== "0") {
      setImageUrl(nestedModal.data.image.data.image_url || "");
      nestedForm.setFieldValue("title", nestedModal.data.title.data.value);
      nestedForm.setFieldValue(
        "description",
        nestedModal.data.description.data.value
      );
    }
  }, [nestedModal.id]);

  if (edit === null) return <Spin fullscreen />;
  return (
    <Modal
      title={"تغییر اطلاعات سکشن"}
      open={modal}
      onCancel={() => stateHandler("cancel")}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Row>
        <Form
          form={form}
          initialValues={{
            sectionTitle: edit?.sectionTitle.data.value,
            title: edit?.title.data.value,
          }}
          name="sectionEditor"
          onFinish={() => stateHandler("submit")}
          requiredMark="optional"
          autoComplete="off"
          layout="vertical"
          className={styles.editor}
          style={{ width: "100%", paddingTop: 12 }}
        >
          <Form.Item
            label={"عنوان سکشن : "}
            name={"sectionTitle"}
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item
            label={"توضیحات : "}
            name={"title"}
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "" }]}
          >
            <Input.TextArea rows={3} placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item>
            <Collapse
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              items={[
                {
                  key: "1",
                  label: "موارد قابل مشاهده",
                  children: (
                    <>
                      {allChildren?.map((itemm: any, index) => (
                        <PreviewResumeDetails
                          index={index}
                          key={index}
                          allItems={allChildren}
                          item={itemm}
                          setAllChildren={setAllChildren}
                          setModal={toggleNestedModal}
                        />
                      ))}
                      <Button
                        type="primary"
                        onClick={() => {
                          if (allChildren.length < 6) {
                            toggleNestedModal({
                              id: "0",
                              modal: true,
                              data: freeNestedModalData,
                            });
                          } else
                            return message.error(
                              "شما تنها میتوانید 6 تا آیتم اضافه کنید."
                            );
                        }}
                      >
                        افزودن
                      </Button>
                    </>
                  ),
                },
              ]}
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
      <Modal
        title={nestedModal.id === "0" ? "افزودن مورد جدید" : "ویرایش سرویس"}
        open={nestedModal.modal}
        onCancel={() => {
          nestedForm.resetFields();
          toggleNestedModal({
            data: freeNestedModalData,
            id: "-1",
            modal: false,
          });
          setImageUrl("");
        }}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { width: "100%" } }}
        cancelText={"لغو"}
      >
        <Form
          layout="vertical"
          form={nestedForm}
          initialValues={{
            title: nestedModal?.data?.title?.data.value,
            description: nestedModal?.data?.description?.data.value,
          }}
          name="serviceEditor"
          onFinish={addNewServices}
          requiredMark
          className={styles.editor}
          style={{ width: "100%", paddingTop: 12 }}
        >
          <Alert
            style={{ marginBottom: 12 }}
            type="info"
            showIcon
            message={checkImageHeight(
              nestedModal.data.index || allChildren.length,
              allChildren.length
            )}
          />

          <Form.Item
            rules={[{ required: true, message: "" }]}
            label={"عنوان"}
            name={"title"}
            wrapperCol={{ span: 24 }}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item
            label={"دسته بندی"}
            name={"description"}
            wrapperCol={{ span: 24 }}
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item
            getValueFromEvent={normFile}
            valuePropName="fileList"
            label={"آپلود"}
            name={"image"}
          >
            <UploadPhoto
              listType="picture-card"
              setImageUrl={setImageUrl}
              imageUrlProps={imageUrl}
              showUploadList={false}
              maxCount={1}
            />
          </Form.Item>

          <Button
            htmlType="submit"
            size="middle"
            type="primary"
            style={{ width: "100%" }}
            disabled={!imageUrl || nestedForm.isFieldsValidating()}
          >
            {nestedModal.id !== "0" ? "اعمال تغییرات" : "افزودن"}
          </Button>
        </Form>
      </Modal>
    </Modal>
  );
};

export default EditResumeModal;
