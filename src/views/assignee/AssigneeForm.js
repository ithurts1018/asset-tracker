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

const AssigneeForm = ({ state, dispatch }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddButton = () => {
    dispatch({
      type: actions.ADD_ASSIGNEE,
      payload: {
        name,
        description,
        status: selectedStatus,
      },
    });
  };
  return (
    <Modal isOpen={state.showAssigneeForm}>
      <ModalHeader>Add Assignee</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>Name</Label>
          <Input onChange={({ target }) => setName(target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input onChange={({ target }) => setDescription(target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Status</Label>
          <Dropdown
            direction="right"
            isOpen={showDropdown}
            toggle={() => setShowDropdown((prevState) => !prevState)}
          >
            <DropdownToggle caret color="" className="border">
              {selectedStatus ? selectedStatus : "Select"}{" "}
            </DropdownToggle>
            <DropdownMenu>
              {state.assigneeStatuses.map((assigneeStatuse, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => setSelectedStatus(assigneeStatuse)}
                >
                  {assigneeStatuse}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={handleAddButton}>
          Add
        </Button>
        <Button
          color="danger"
          onClick={() =>
            dispatch({ type: actions.SHOW_ASSIGNEE_FORM, payload: false })
          }
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AssigneeForm;
