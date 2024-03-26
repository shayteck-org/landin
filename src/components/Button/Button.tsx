import ModalDispatcher from "@/common/modalApplications/ModalDispatcher";
import { ButtonModel } from "./model";
import { Fragment, useEffect, useState } from "react";

const Button: React.FC<
  ButtonModel & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ data, elementId, onClickAction, ...rest }) => {
  const { onCopy, ...buttonProps } = rest;
  const [modal, toggle] = useState<boolean>(false);

  return (
    <Fragment>
      <ModalDispatcher type={onClickAction} modal={modal} toggle={toggle} />
      <button
        type="button"
        style={{ backgroundColor: data.style?.bgColor || "#473BF0" }}
        onClick={() => toggle(!modal)}
        {...buttonProps}
      >
        {data.value}
      </button>
    </Fragment>
  );
};
export default Button;
