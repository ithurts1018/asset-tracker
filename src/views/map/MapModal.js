import React from "react";
import { Modal } from "reactstrap";
import Map from "../../components/Map";
import { actions } from "../reducer";

const MapPage = ({ state, dispatch }) => {
  return (
    <Modal
      size="xl"
      isOpen={state.showMap}
      toggle={() => dispatch({ type: actions.SHOW_MAP, payload: false })}
    >
      <Map lat={state.mapLocation[0]} lng={state.mapLocation[1]} />
    </Modal>
  );
};

export default MapPage;
