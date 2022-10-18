import { getValue } from "@testing-library/user-event/dist/utils";
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
  const [showDropdownType, setShowDropdownType] = useState(false);
  const [showDropdownAssignee, setShowDropdownAssignee] = useState(false);
  const [showDropdownStatus, setShowDropdownStatus] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedAssignee, setSelectedAssignee] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [trackerNo, setTrackerNo] = useState("");

  const handleRequestButton = () => {
    if (state.action === actions.EDIT_ASSET) {
      const payload = state.asset;

      if (name) {
        payload.name = name;
      }
      if (description) {
        payload.description = description;
      }
      if (trackerNo) {
        payload.tracker_no = trackerNo;
      }
      if (selectedAssignee) {
        payload.assignee = selectedAssignee;
      }
      if (selectedType) {
        payload.type = selectedType;
      }
      if (selectedStatus) {
        payload.status = selectedStatus;
      }

      dispatch({
        type: actions.UPDATE_ASSET,
        payload,
      });
    } else {
      dispatch({
        type: actions.ADD_ASSET,
        payload: {
          name,
          description,
          assignee: selectedAssignee,
          type: selectedType,
          tracker_no: trackerNo,
        },
      });
    }
    setSelectedType("");
    setSelectedAssignee("");
  };

  return (
    <>
      <Modal isOpen={state.showAssetForm}>
        <ModalHeader>Asset Form</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Type</Label>
            <Dropdown
              isOpen={showDropdownType}
              toggle={() => setShowDropdownType((prevState) => !prevState)}
              direction="right"
            >
              <DropdownToggle caret color="" className="border w-50">
                {selectedType ? selectedType : state.asset?.type ?? "Select"}{" "}
              </DropdownToggle>
              <DropdownMenu>
                {state.assetTypes.map((assetType, index) => (
                  <DropdownItem
                    key={index}
                    onClick={() => setSelectedType(assetType)}
                  >
                    {assetType}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Asset Name</Label>
            <Input
              onChange={({ target }) => setName(target.value)}
              defaultValue={state.asset?.name}
            />
          </FormGroup>
          <FormGroup>
            <Label>Asset Description</Label>
            <Input
              onChange={({ target }) => setDescription(target.value)}
              defaultValue={state.asset?.description}
            />
          </FormGroup>
          <FormGroup>
            <Label>Tracker No</Label>
            <Input
              onChange={({ target }) => setTrackerNo(target.value)}
              defaultValue={state.asset?.tracker_no}
            />
          </FormGroup>
          <FormGroup>
            <Label>Assignee</Label>
            <Dropdown
              isOpen={showDropdownAssignee}
              toggle={() => setShowDropdownAssignee((prevState) => !prevState)}
              direction="right"
            >
              <DropdownToggle caret color="" className="border w-50">
                {selectedAssignee
                  ? selectedAssignee
                  : state.asset?.assignee ?? "Select"}{" "}
              </DropdownToggle>
              <DropdownMenu>
                {state.assignees.map((assignee, index) => (
                  <DropdownItem
                    key={index}
                    onClick={() => setSelectedAssignee(assignee.name)}
                  >
                    {assignee.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </FormGroup>
          {state?.action === actions.EDIT_ASSET ? (
            <FormGroup>
              <Label>Status</Label>

              <Dropdown
                isOpen={showDropdownStatus}
                toggle={() => setShowDropdownStatus((prevState) => !prevState)}
                direction="right"
              >
                <DropdownToggle caret color="" className="border w-50">
                  {selectedStatus
                    ? selectedStatus
                    : state.asset?.status ?? "Select"}{" "}
                </DropdownToggle>
                <DropdownMenu>
                  {state.assetStatuses.map((assetStatus, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => setSelectedStatus(assetStatus)}
                    >
                      {assetStatus}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </FormGroup>
          ) : null}
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleRequestButton}>
            {state.action === actions.EDIT_ASSET ? "Update" : "Add"}
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
