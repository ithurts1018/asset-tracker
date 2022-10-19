import React from "react";
import { Button, Modal } from "reactstrap";
import { actions } from "../reducer";

const QRModal = ({ state, dispatch }) => {
  return (
    <Modal
      size="sm"
      isOpen={state.showQR}
      toggle={() =>
        dispatch({
          type: actions.SHOW_QR,
          payload: { showQR: false, qrData: "" },
        })
      }
      style={{ marginTop: 200 }}
    >
      <img
        src={`http://qrcode-image-generator.herokuapp.com/generate?height=100&width=100&data=${state.qrData}`}
      />
      <Button className="rouded-0">Print</Button>
    </Modal>
  );
};

export default QRModal;
