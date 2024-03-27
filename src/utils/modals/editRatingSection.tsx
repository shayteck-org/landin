import { editMode } from "@/types/model";
import styles from "@/styles/editModal.module.scss";
import {
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
} from "antd";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import PreviewItemDetails from "@/common/previewItem";
import UploadPhoto from "@/common/upload";
import useObjectMaker from "@/hooks/useObjectMaker";
import { PresetColors } from "antd/es/theme/internal";
import ImagePopOver from "./ImagePopover";
import ImageLibraryByType from "@/components/Image/ImageLibrary/ImageLibraries";
import PreviewCommentsDetails from "@/common/previewItem/PreviewComments";

let freeNestedModalData = { image: { data: { image_url: "" } } };

const EditRatingModal: React.FC<editMode> = ({
  edit,
  setEdit,
  setMode,
  mode,
  defaultValues,
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
  const [openPopover, setOpenPopover] = useState<boolean>(false);
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
    const { bgColor, ...rest } = values;
    if (nestedModal.id !== "0") {
      const childIndex = allChildren.findIndex(
        (child) => child.data.id === nestedModal.id
      );
      if (childIndex !== -1) {
        const updatedChild = {
          ...allChildren[childIndex],
          data: {
            id: nestedModal.id,
            author: createSectionObject({ key: "author", type: "typography" }),
            comment: createSectionObject({
              key: "comment",
              type: "typography",
            }),
            image: {
              data: {
                image_url: imageUrl,
              },
            },
            rate: {
              data: {
                star_count: nestedForm.getFieldValue("rate"),
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
          author: createSectionObject({ key: "author", type: "typography" }),
          comment: createSectionObject({
            key: "comment",
            type: "typography",
          }),
          image: {
            data: {
              image_url: imageUrl,
            },
          },
          rate: {
            data: {
              star_count: nestedForm.getFieldValue("rate"),
            },
          },
          id: Date.now().toString(),
        },
      };
      setAllChildren((prev: any) => [...prev, newChild]);
    }
    nestedForm.resetFields();
    toggleNestedModal({ id: "-1", modal: false, data: freeNestedModalData });
  };

  useEffect(() => {
    const { id } = nestedModal;

    if (id !== "-1" && id !== "0") {
      setImageUrl(nestedModal.data.image.data.image_url || "");
      nestedForm.setFieldValue("comment", nestedModal.data.comment.data.value);
      nestedForm.setFieldValue("rate", nestedModal.data.rate.data.star_count);
      nestedForm.setFieldValue("author", nestedModal.data.author.data.value);
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
          initialValues={{}}
          name="sectionEditor"
          onFinish={() => stateHandler("submit")}
          requiredMark
          autoComplete="off"
          className={styles.editor}
          style={{ width: "100%", paddingTop: 12 }}
        >
          <Form.Item>
            <Collapse
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              items={[
                {
                  key: "1",
                  label: "نظرات مشتریان",
                  children: (
                    <>
                      {allChildren?.map((itemm: any) => (
                        <PreviewCommentsDetails
                          key={itemm.data.id}
                          allItems={allChildren}
                          item={itemm}
                          setAllChildren={setAllChildren}
                          setModal={toggleNestedModal}
                        />
                      ))}
                      <Button
                        type="primary"
                        onClick={() => {
                          toggleNestedModal({
                            id: "0",
                            modal: true,
                            data: freeNestedModalData,
                          });
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
        }}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { width: "100%" } }}
        cancelText={"لغو"}
      >
        <Form
          layout="vertical"
          form={nestedForm}
          initialValues={{
            commnet: nestedModal?.data?.commnet?.data.value,
            rate: nestedModal?.data?.rate?.data.star_count,
            author: nestedModal?.data?.author?.data?.value,
          }}
          name="serviceEditor"
          onFinish={addNewServices}
          requiredMark
          className={styles.editor}
          style={{ width: "100%", paddingTop: 12 }}
        >
          <Form.Item
            label={"نویسنده"}
            name={"author"}
            wrapperCol={{ span: 24 }}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item label={"نظر"} name={"comment"} wrapperCol={{ span: 24 }}>
            <Input.TextArea placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item label={"امتیاز"} name={"rate"} wrapperCol={{ span: 24 }}>
            <InputNumber
              min={0.0}
              max={5.0}
              placeholder="مقدار جدید را وارد کنید"
            />
          </Form.Item>

          <Form.Item
            getValueFromEvent={normFile}
            valuePropName="fileList"
            label={"آپلود"}
            name={"image"}
          >
            <UploadPhoto
              listType="picture-circle"
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
          >
            {nestedModal.id !== "0" ? "اعمال تغییرات" : "افزودن"}
          </Button>
        </Form>
      </Modal>
    </Modal>
  );
};

export default EditRatingModal;
