import { Col, Rate, Row, Spin, message } from "antd";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import styles from "./style.module.scss";
type Props = {
  item: any;
  allItems: any[];
  setAllChildren: any;
  setModal: Dispatch<SetStateAction<any>>;
  index: number;
};

const PreviewResumeDetails: React.FC<Props> = ({
  item,
  allItems,
  setAllChildren,
  setModal,
  index,
}) => {
  const editButton = (item: { data: { id: string } }) => {
    setModal({
      id: item.data.id,
      modal: true,
      data: { ...item.data, index },
    });
  };

  const deleteButton = (item: { data: { id: string } }) => {
    if (allItems.length <= 4)
      return message.error("حداقل مقدار آیتم ها 4 عدد میباشد.");
    setAllChildren(allItems.filter((s) => s.data.id !== item.data.id));
  };

  if (!item) return <Spin />;
  return (
    <Row className={styles.itemContainer}>
      <Col xs={4} className={styles.imageHolder}>
        <p>تصویر :</p>
        <img src={item?.data?.image.data.image_url} alt="تصویر مدنظر" />
      </Col>
      <Col xs={6} className={styles.titleHolder}>
        <p>نام :</p>
        <p>{item?.data?.title.data.value}</p>
      </Col>
      <Col xs={8} className={styles.titleHolder}>
        <p>دسته بندی :</p>
        <span>{item.data.description.data.value}</span>
      </Col>
      <Col xs={6} className={styles.editItem}>
        <p style={{ color: "palegreen" }} onClick={() => editButton(item)}>
          ویرایش
        </p>
        &nbsp;
        <p style={{ color: "red" }} onClick={() => deleteButton(item)}>
          حذف
        </p>
      </Col>
    </Row>
  );
};

export default PreviewResumeDetails;
