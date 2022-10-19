import React, { useState } from "react";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { actions } from "../reducer";

const LocationForm = ({ state, dispatch }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddButton = () => {
    dispatch({
      type: actions.ADD_LOCATION,
      payload: {
        name,
        description,
      },
    });
  };

  return (
    <Modal isOpen={state.showLocationForm}>
      <ModalHeader>Location Form</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>Name</Label>
          <Input onChange={({ target }) => setName(target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input onChange={({ target }) => setDescription(target.value)} />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={handleAddButton}>
          Add
        </Button>
        <Button
          color="danger"
          onClick={() =>
            dispatch({ type: actions.SHOW_LOCATION_FORM, payload: false })
          }
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default LocationForm;
