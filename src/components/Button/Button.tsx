import { ButtonModel } from "./model";

const Button: React.FC<
  ButtonModel & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ data, mode, elementId, onClick, ...rest }) => {
  const { onCopy, ...buttonProps } = rest;

  return (
    <button
      style={{ backgroundColor: data.style?.bgColor || "red" }}
      onClick={onClick}
      {...buttonProps}
    >
      {data.value}
    </button>
  );
};
export default Button;
