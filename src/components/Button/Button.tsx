import { onClickModel } from "@/types/model";
import { ButtonModel } from "./model";

const Button: React.FC<
  ButtonModel & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ data, elementId, onClickAction, ...rest }) => {
  const { onCopy, ...buttonProps } = rest;

  function onClickActionFinder(onClickAction: onClickModel): void {
    switch (onClickAction) {
      case onClickModel.openDialog1: {
        return alert(onClickModel.openDialog1);
      }
      case onClickModel.openDialog2: {
        return alert(onClickModel.openDialog2);
      }
      case onClickModel.openDialog3: {
        return alert(onClickModel.openDialog3);
      }
      case onClickModel.openDialog4: {
        return alert(onClickModel.openDialog4);
      }
      default: {
        return alert("not set");
      }
    }
  }

  return (
    <button
      type="button"
      style={{ backgroundColor: data.style?.bgColor || "#473BF0" }}
      onClick={() => onClickActionFinder(onClickAction)}
      {...buttonProps}
    >
      {data.value}
    </button>
  );
};
export default Button;
