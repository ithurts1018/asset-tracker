import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Col, Container, Row } from "reactstrap";
import { actions } from "../reducer";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const AssetPage = ({ state, dispatch }) => {
  return (
    <>
      <div style={{ height: 120 }}></div>
      <div>
        <Container>
          <ToolkitProvider
            keyField="asset_id"
            data={state.assets}
            columns={[
              { dataField: "asset_id", text: "Asset ID", searchable: true },
              { dataField: "serial", text: "Serial No", searchable: true },
              { dataField: "type", text: "Type" },
              { dataField: "name", text: "Name", searchable: true },
              {
                dataField: "description",
                text: "Description",
                searchable: true,
              },
              { dataField: "assignee", text: "Assignee", searchable: true },
              { dataField: "tracker_no", text: "Tracker No", searchable: true },
              { dataField: "status", text: "Status" },
              {
                dataField: "",
                text: "Actions",
                formatter: (cell, row) => {
                  return (
                    <>
                      <Button
                        color="warning"
                        style={{ width: 80 }}
                        onClick={() =>
                          dispatch({
                            type: actions.EDIT_ASSET,
                            payload: row,
                          })
                        }
                      >
                        Update
                      </Button>
                      <Button
                        color="info"
                        style={{ width: 80 }}
                        onClick={() =>
                          dispatch({
                            type: actions.TRACK_LOCATION,
                            payload: row.location,
                          })
                        }
                      >
                        Track
                      </Button>
                      <Button
                        color="primary"
                        style={{ width: 80 }}
                        onClick={() =>
                          dispatch({
                            type: actions.SHOW_QR,
                            payload: { show: true, data: row.serial },
                          })
                        }
                      >
                        QR
                      </Button>
                    </>
                  );
                },
              },
            ]}
            search={{
              searchFormatted: true,
            }}
          >
            {({ baseProps, searchProps }) => (
              <>
                <Row className="justify-content-between">
                  <div>
                    <Button
                      color="primary border"
                      className="ml-3"
                      onClick={() =>
                        dispatch({
                          type: actions.SHOW_ASSET_FORM,
                          payload: true,
                        })
                      }
                    >
                      Add Asset
                    </Button>
                    <Button
                      color="secondary"
                      className="mx-1"
                      onClick={() =>
                        dispatch({
                          type: actions.SHOW_ASSET_TRANSFER_FORM,
                          payload: true,
                        })
                      }
                    >
                      Transfer
                    </Button>
                    {/* <Button
                      color="info"
                      onClick={() =>
                        dispatch({
                          type: actions.RECEIVE_ASSET,
                        })
                      }
                    >
                      Receive Asset
                    </Button> */}
                  </div>
                  <div className="mr-3">
                    <Search.SearchBar {...searchProps} />
                  </div>
                </Row>
                <Row>
                  <Col sm="12" className="mt-3">
                    <BootstrapTable {...baseProps} bootstrap4 condensed />
                  </Col>
                </Row>
              </>
            )}
          </ToolkitProvider>
        </Container>
      </div>
    </>
  );
};

export default AssetPage;
