import { Button, Col, Popover, PopoverProps, Row } from "antd";
import { Dispatch, Fragment, ReactNode, SetStateAction, useState } from "react";

type Props = PopoverProps & {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  content: React.ReactNode;
};

const ImagePopOver: React.FC<Props> = ({
  children,
  open,
  content,
  setOpen,
  ...rest
}) => {
  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      content={
        <Fragment>
          {content}
          <a onClick={hide}>بستن</a>
        </Fragment>
      }
      title="Title"
      trigger="hover"
      open={open}
      placement="left"
      onOpenChange={handleOpenChange}
      {...rest}
    >
      {children}
    </Popover>
  );
};

export default ImagePopOver;
