import { ButtonModel } from "./model";

const Button: React.FC<
  ButtonModel & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ data, mode, elementId, onClick, ...rest }) => {
  const { onCopy, ...buttonProps } = rest;

  return (
    <button onClick={onClick} {...buttonProps}>
      {data.value}
    </button>
  );
};
export default Button;
