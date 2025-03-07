import { editMode } from "@/types/model";
import styles from "@/styles/editModal.module.scss";
import {
  Button,
  Col,
  Collapse,
  ColorPicker,
  Form,
  Input,
  Modal,
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

let freeNestedModalData = { image: { data: { image_url: "" } } };

const EditWhyUsModal: React.FC<editMode> = ({
  edit,
  setEdit,
  setMode,
  mode,
  defaultValues,
}) => {
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

  const editSectionObject = useObjectMaker(form);
  const createSectionObject = useObjectMaker(nestedForm);

  useEffect(() => {
    toggle(mode === "edit" ? true : false);
  }, [mode]);

  function stateHandler(status: "cancel" | "submit") {
    switch (status) {
      case "submit": {
        setEdit({
          ...edit,
          title: editSectionObject({ key: "title", type: "typography" }),
          sectionTitle: editSectionObject({
            key: "sectionTitle",
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
            image: {
              data: {
                image_url: nestedModal.data.image.data.image_url,
              },
            },
            description: createSectionObject({
              key: "description",
              type: "typography",
            }),
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
          image: {
            data: {
              image_url: nestedModal.data.image.data.image_url,
            },
          },
          description: createSectionObject({
            key: "description",
            type: "typography",
          }),
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

    if (id !== "-1") {
      toggleNestedModal({
        ...nestedModal,
        data:
          allChildren.find((child) => child.data.id === id)?.data ||
          freeNestedModalData,
      });

      if (id !== "-1" && id !== "0") {
        nestedForm.setFieldValue("title", nestedModal.data.title.data.value);
        nestedForm.setFieldValue(
          "description",
          nestedModal.data.description.data.value
        );
      }
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
            title: edit?.title.data.value,
            sectionTitle: edit?.sectionTitle.data.value,
          }}
          name="sectionEditor"
          onFinish={() => stateHandler("submit")}
          requiredMark
          autoComplete="off"
          className={styles.editor}
          style={{ width: "100%", paddingTop: 12 }}
        >
          <Form.Item
            label={"عنوان سکشن"}
            name={"sectionTitle"}
            wrapperCol={{ span: 24 }}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item
            label={"عنوان زیر متن"}
            name={"title"}
            wrapperCol={{ span: 24 }}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item>
            <Collapse
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              items={[
                {
                  key: "1",
                  label: "خدمات ما",
                  children: (
                    <>
                      {allChildren?.map((itemm: any) => (
                        <PreviewItemDetails
                          allItems={allChildren}
                          setAllChildren={setAllChildren}
                          key={itemm.data.id}
                          item={itemm}
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
          <Form.Item label={"عنوان"} name={"title"} wrapperCol={{ span: 24 }}>
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item
            label={"توضیحات"}
            name={"description"}
            wrapperCol={{ span: 24 }}
          >
            <Input.TextArea
              maxLength={150}
              showCount
              rows={4}
              placeholder="مقدار جدید را وارد کنید"
            />
          </Form.Item>

          <Form.Item name={"photo"}>
            <ImagePopOver
              content={
                <ImageLibraryByType setData={toggleNestedModal} type="why" />
              }
              title="گالری تصاویر"
              setOpen={setOpenPopover}
              open={openPopover}
            >
              <Row
                className={styles.showImagePopover}
                onClick={() => setOpenPopover(true)}
              >
                {nestedModal.data.image.data.image_url ? (
                  <img
                    width={"100%"}
                    height={"100%"}
                    style={{ borderRadius: 8 }}
                    src={nestedModal.data.image.data.image_url}
                    alt="تصویر سکشن"
                  />
                ) : (
                  <p>انتخاب تصویر</p>
                )}
              </Row>
            </ImagePopOver>
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

export default EditWhyUsModal;
