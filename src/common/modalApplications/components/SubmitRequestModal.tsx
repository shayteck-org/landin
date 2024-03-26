import { Modal } from "antd";
import { Dispatch, SetStateAction, useState } from "react";

const SubmitRequest = (props: {
  toggle: Dispatch<SetStateAction<boolean>>;
  modal: boolean;
}) => {
  return (
    <Modal open={props.modal} onCancel={() => props.toggle(false)}>
      <p>SubmitRequest</p>
    </Modal>
  );
};

export default SubmitRequest;
