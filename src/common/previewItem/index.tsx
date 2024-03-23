import { Col, Row, Spin } from "antd";
import React, { Dispatch } from "react";
import styles from "./style.module.scss";
type Props = {
  item: any;
  state: any;
  setState: Dispatch<any>;
  allItems: any[];
  setAllChildren: any;
};

const PreviewItemDetails: React.FC<Props> = ({
  item,
  setState,
  state,
  allItems,
  setAllChildren,
}) => {
  console.log(item);

  const editButton = (item: any) => {
    setState(item);
    console.log(item);
  };

  const deleteButton = (item: { data: { id: string } }) => {
    // setState(item);
    setAllChildren(allItems.filter((s) => s.data.id !== item.data.id));
    console.log(item.data.id);
  };

  if (!item) return <Spin />;
  return (
    <Row className={styles.itemContainer}>
      <Col span={5} className={styles.imageHolder}>
        <p>تصویر :</p>
        <img src={item?.data?.image.data.image_url} alt="تصویر مدنظر" />
      </Col>
      <Col span={8} className={styles.titleHolder}>
        <p>عنوان :</p>
        <p>{item?.data?.title.data.value}</p>
      </Col>
      <Col span={5} className={styles.bgColor}>
        <p>رنگ :</p>
        <span style={{ backgroundColor: item?.data?.style?.bgColor }}></span>
      </Col>
      <Col span={6} className={styles.editItem}>
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

export default PreviewItemDetails;
