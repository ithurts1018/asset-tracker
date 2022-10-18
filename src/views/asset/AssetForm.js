import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { actions } from "../reducer";

const AssetForm = ({ state, dispatch }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleRequestButton = () => {
    dispatch({
      type: actions.REQUEST_ASSET,
      payload: {
        name,
        description,
        type: selectedType,
      },
    });
  };

  return (
    <>
      <Modal isOpen={state.showAssetForm}>
        <ModalHeader>Request Form</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Type</Label>
            <Dropdown
              isOpen={showDropDown}
              toggle={() => setShowDropDown((prevState) => !prevState)}
              direction="right"
            >
              <DropdownToggle caret color="" className="border w-50">
                {selectedType ? selectedType : "Select"}{" "}
              </DropdownToggle>
              <DropdownMenu>
                {state.assetTypes.map((assetType) => (
                  <DropdownItem onClick={() => setSelectedType(assetType)}>
                    {assetType}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </FormGroup>
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
          <Button color="success" onClick={handleRequestButton}>
            Request
          </Button>
          <Button
            color="danger"
            onClick={() =>
              dispatch({ type: actions.SHOW_ASSET_FORM, payload: false })
            }
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AssetForm;
