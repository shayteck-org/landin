import { Modal } from "antd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const ContactUsModal = (props: {
  toggle: Dispatch<SetStateAction<boolean>>;
  modal: boolean;
}) => {
  return (
    <Modal
      open={props.modal}
      onCancel={() => {
        props.toggle(false);
      }}
    >
      <p>hi</p>
    </Modal>
  );
};

export default ContactUsModal;
