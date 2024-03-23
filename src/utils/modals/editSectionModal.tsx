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
import { SassColor } from "sass";
import { PresetColors } from "antd/es/theme/internal";

const EditSectionModal: React.FC<editMode> = ({
  edit,
  setEdit,
  setMode,
  mode,
  defaultValues,
}) => {
  const [modal, toggle] = useState<boolean>(false);
  const [nestedModal, toggleNestedModal] = useState<{
    modal: boolean;
    id: number;
  }>({
    modal: false,
    id: -1,
  });
  const [allChildren, setAllChildren] = useState<any[]>(edit?.content || []);

  const [form] = useForm();
  const [nestedForm] = useForm();
  const [state, setState] = useState<Partial<any>>({});

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
    if (nestedModal.id > 0) {
    } else {
      const { color, ...rest } = values;
      const newChild = {
        data: {
          title: createSectionObject({ key: "title", type: "typography" }),
          link: createSectionObject({ key: "link", type: "link" }),
          image: {
            data: {
              image_url: "./personP1.png",
            },
          },
          description: createSectionObject({
            key: "description",
            type: "typography",
          }),
          id: Date.now().toString(),
          style: { bgColor: `#${color.toHex()}` },
        },
      };
      setAllChildren((prev: any) => [...prev, newChild]);
    }
    nestedForm.resetFields();
    setState({});
    toggleNestedModal({ id: -1, modal: false });
  };

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

          <Form.Item
            label={"توضیحات"}
            name={"description"}
            wrapperCol={{ span: 24 }}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label={"رنگ متن را انتخاب کنید."}
                name={"color"}
                wrapperCol={{ span: 24 }}
              >
                <ColorPicker defaultValue={edit?.data?.style.color || "#000"} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Collapse
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              onChange={(e) => console.log(e)}
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
                          setState={setState}
                          state={state}
                          key={itemm.data.id}
                          item={itemm}
                        />
                      ))}
                      <Button
                        type="primary"
                        onClick={() => {
                          toggleNestedModal({
                            id: 0,
                            modal: true,
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
        title={nestedModal.id <= 0 ? "افزودن مورد جدید" : "ویرایش سرویس"}
        open={nestedModal.modal}
        onCancel={() => toggleNestedModal({ id: -1, modal: false })}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Form
          form={nestedForm}
          initialValues={{
            title: state?.data?.title.data.value,
            description: state?.data?.description.data.value,
            image: state?.data?.image.data.image_url,
            link: state?.data?.link.data.path,
            color: state?.data?.style.bgColor || "#000",
          }}
          name="serviceEditor"
          onFinish={addNewServices}
          requiredMark
          autoComplete="off"
          className={styles.editor}
          style={{ width: "100%", paddingTop: 12 }}
        >
          <Form.Item
            label={"عنوان سرویس"}
            name={"title"}
            wrapperCol={{ span: 24 }}
          >
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item
            label={"توضیحات"}
            name={"description"}
            wrapperCol={{ span: 24 }}
          >
            <Input.TextArea placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Form.Item label={"لینک"} name={"link"} wrapperCol={{ span: 24 }}>
            <Input placeholder="مقدار جدید را وارد کنید" />
          </Form.Item>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label={"رنگ پس زمینه را انتخاب کنید."}
                name={"color"}
                wrapperCol={{ span: 24 }}
              >
                <ColorPicker
                  defaultFormat="hex"
                  format="hex"
                  presets={[
                    {
                      colors: PresetColors.map((p) => p),
                      label: "پالت پیشنهادی",
                    },
                  ]}
                  showText
                />
              </Form.Item>
            </Col>
          </Row>

          {/* //TODO : image library still left  */}
          <Form.Item name={"photo"}>
            <p>تصویر : </p>
            <UploadPhoto imageUrlProps={state?.data?.image.data.image_url} />
          </Form.Item>

          <Button
            htmlType="submit"
            size="middle"
            type="primary"
            style={{ width: "100%" }}
          >
            {nestedModal.id > 0 ? "اعمال تغییرات" : "افزودن"}
          </Button>
        </Form>
      </Modal>
    </Modal>
  );
};

export default EditSectionModal;
