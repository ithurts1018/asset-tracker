import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Col, Container, Row } from "reactstrap";
import { actions } from "../reducer";

const AssetPage = ({ state, dispatch }) => {
  return (
    <>
      <div style={{ height: 120 }}></div>
      <div>
        <Container>
          <Row>
            <Button
              color="primary border"
              className="ml-3"
              onClick={() =>
                dispatch({ type: actions.SHOW_ASSET_FORM, payload: true })
              }
            >
              Request
            </Button>
          </Row>
          <Row>
            <Col sm="12" className="mt-3">
              <BootstrapTable
                bootstrap4
                condensed
                keyField="id"
                data={state.assets}
                columns={[
                  { dataField: "asset_id", text: "Asset ID" },
                  { dataField: "serial", text: "Serial No" },
                  { dataField: "type", text: "Type" },
                  { dataField: "name", text: "Name" },
                  { dataField: "description", text: "Description" },
                  { dataField: "assignee", text: "Assignee" },
                  { dataField: "status", text: "Status" },
                  {
                    dataField: "location",
                    text: "Location",
                    formatter: () => {
                      return (
                        <>
                          <Button color="info">View</Button>
                        </>
                      );
                    },
                  },
                ]}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AssetPage;
