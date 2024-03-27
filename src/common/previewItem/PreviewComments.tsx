import { Col, Rate, Row, Spin } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./style.module.scss";
type Props = {
  item: any;
  allItems: any[];
  setAllChildren: any;
  setModal: Dispatch<SetStateAction<any>>;
};

const PreviewCommentsDetails: React.FC<Props> = ({
  item,
  allItems,
  setAllChildren,
  setModal,
}) => {
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
      <Col xs={5} className={styles.imageHolder}>
        <p>تصویر :</p>
        <img src={item?.data?.image.data.image_url} alt="تصویر مدنظر" />
      </Col>
      <Col xs={8} className={styles.titleHolder}>
        <p>نویسنده :</p>
        <p>{item?.data?.author.data.value}</p>
      </Col>
      <Col xs={5} className={styles.rate}>
        <p>امتیاز :</p>
        <span>{item.data.rate.data.star_count}</span>
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

export default PreviewCommentsDetails;
