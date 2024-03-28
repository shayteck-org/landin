import { Col, Row, Spin } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./style.module.scss";
type Props = {
  item: any;
  allItems: any[];
  setAllChildren: any;
  setModal: Dispatch<SetStateAction<any>>;
};

const PreviewItemDetails: React.FC<Props> = ({
  item,
  allItems,
  setAllChildren,
  setModal,
}) => {
  const doesStyleExist = !!item.data.style;

  const editButton = (item: { data: { id: string } }) => {
    setModal({
      id: item.data.id,
      modal: true,
      data: item.data,
    });
  };

  const deleteButton = (item: { data: { id: string } }) => {
    setAllChildren(allItems.filter((s) => s.data.id !== item.data.id));
  };

  if (!item) return <Spin />;
  return (
    <Row className={styles.itemContainer}>
      <Col span={doesStyleExist ? 5 : 7} className={styles.imageHolder}>
        <p>تصویر :</p>
        <img src={item?.data?.image.data.image_url} alt="تصویر مدنظر" />
      </Col>
      <Col span={doesStyleExist ? 8 : 11} className={styles.titleHolder}>
        <p>عنوان :</p>
        <p>{item?.data?.title.data.value}</p>
      </Col>
      {doesStyleExist && (
        <Col span={5} className={styles.bgColor}>
          <p>رنگ :</p>
          <span style={{ backgroundColor: item?.data?.style?.bgColor }}></span>
        </Col>
      )}

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
