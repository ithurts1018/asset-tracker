import React, { useState } from "react";
import {
  Button,
  Col,
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
  Row,
} from "reactstrap";
import { actions } from "../reducer";

const AssetTransferForm = ({ state, dispatch }) => {
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [showDropdownLocation, setShowDropdownLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({});

  const handleTransferButton = () => {
    dispatch({
      type: actions.TRANSFER_ASSET,
      payload: { assets: selectedAssets, location: selectedLocation },
    });
    setShowDropdownLocation(false);
    setSelectedAssets([]);
    setSelectedLocation({});
  };

  return (
    <Modal size="lg" isOpen={state.showAssetTransferForm}>
      <ModalHeader>Transfer Request</ModalHeader>
      <ModalBody>
        <Row className="px-3">
          {state.assets.map((asset, index) => (
            <Col xs="4" key={index}>
              <FormGroup>
                <Label>
                  <Input
                    type="checkbox"
                    onChange={({ target }) => {
                      if (target.checked) {
                        setSelectedAssets((prevState) => [...prevState, asset]);
                      } else {
                        setSelectedAssets((prevState) =>
                          prevState.filter(
                            (selectedAsset) =>
                              selectedAsset.asset_id !== asset.asset_id
                          )
                        );
                      }
                    }}
                  />
                  {asset.name}
                </Label>
              </FormGroup>
            </Col>
          ))}
        </Row>
        <FormGroup>
          <Label>Location</Label>
          <Dropdown
            direction="right"
            isOpen={showDropdownLocation}
            toggle={() => setShowDropdownLocation((prevState) => !prevState)}
          >
            <DropdownToggle caret className="border w-50" color="">
              {selectedLocation?.name ? selectedLocation?.name : "Select"}{" "}
            </DropdownToggle>
            <DropdownMenu>
              {state.locations.map((location, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => setSelectedLocation(location)}
                >
                  {location.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={handleTransferButton}>
          Transfer
        </Button>
        <Button
          color="danger"
          onClick={() =>
            dispatch({ type: actions.SHOW_ASSET_TRANSFER_FORM, payload: false })
          }
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AssetTransferForm;

// const assets = state.assets;
// const [selectedAssets, setSelectedAssets] = useState([
//   {
//     showDropdownAsset: false,
//   },
// ]);
// {selectedAssets.map((selectedAsset, selectedAssetIndex) => (
//     <Dropdown
//       key={selectedAssetIndex}
//       direction="right"
//       isOpen={selectedAssets[selectedAssetIndex].showDropdownAsset}
//       toggle={() =>
//         setSelectedAssets((prevState) => {
//           prevState[selectedAssetIndex].showDropdownAsset =
//             !prevState[selectedAssetIndex].showDropdownAsset;

//           return [...prevState];
//         })
//       }
//     >
//       <Col xs="6" className="border">
//         <DropdownToggle>
//           {selectedAssets[selectedAssetIndex].serial ?? "Select"}
//         </DropdownToggle>
//         <DropdownMenu>
//           {assets
//             .filter((asset) => {
//               return !selectedAssets
//                 .map((selectedAsset) => selectedAsset === asset)
//                 .includes(true);
//             })
//             .map((asset, index) => (
//               <DropdownItem
//                 key={index}
//                 value={asset.asset_id}
//                 onClick={() => {
//                   setSelectedAssets((prevState) => {
//                     console.log(prevState);
//                     console.log(selectedAssetIndex);
//                     console.log(asset);
//                     asset.showDropdownAsset = false;
//                     prevState[selectedAssetIndex] = asset;
//                     //   prevState[selectedAssetIndex + 1] = {
//                     //     showDropdownAsset: false,
//                     //   };
//                     console.log(prevState);
//                     return prevState;
//                   });
//                 }}
//               >
//                 ({asset.serial}) - {asset.name}
//               </DropdownItem>
//             ))}
//         </DropdownMenu>
//       </Col>
//     </Dropdown>
//   ))}
