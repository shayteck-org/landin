import { onClickModel } from "@/types/model";
import { ButtonModel } from "./model";
import Hi from "@/common/modalApplications/components/ContactUsModal";
import ModalDispatcher from "@/common/modalApplications/ModalDispatcher";
import { useState } from "react";
import ContactUsModal from "@/common/modalApplications/components/ContactUsModal";

const Button: React.FC<
  ButtonModel & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ data, elementId, onClickAction, ...rest }) => {
  const { onCopy, ...buttonProps } = rest;
  const [modal, toggle] = useState(false);

  return (
    <button
      type="button"
      style={{ backgroundColor: data.style?.bgColor || "#473BF0" }}
      onClick={() => toggle(!modal)}
      {...buttonProps}
    >
      <ModalDispatcher modal={modal} toggle={toggle} type={onClickAction} />
      {data.value}
    </button>
  );
};
export default Button;
