import { onClickModel } from "@/types/model";
import { Dispatch, SetStateAction, useEffect } from "react";
import ContactUsModal from "./components/ContactUsModal";
import SubmitRequest from "./components/SubmitRequestModal";

const ModalDispatcher = (props: {
  type: onClickModel;
  modal: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}) => {
  const { modal, toggle, type } = props;

  switch (type) {
    case onClickModel.openDialog1:
      return <ContactUsModal modal={modal} toggle={toggle} />;
    case onClickModel.openDialog2:
      return <SubmitRequest modal={modal} toggle={toggle} />;
    case onClickModel.openDialog3:
      return <div>sd</div>;
    case onClickModel.openDialog4:
      return <div>sd</div>;
  }
};

export default ModalDispatcher;
