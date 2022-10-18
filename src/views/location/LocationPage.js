import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Col, Container, Row } from "reactstrap";
import { actions } from "../reducer";

const LocationPage = ({ state, dispatch }) => {
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
                dispatch({ type: actions.SHOW_ASSIGNEE_FORM, payload: true })
              }
            >
              Add
            </Button>
          </Row>
          <Row>
            <Col sm="12" className="mt-3">
              <BootstrapTable
                bootstrap4
                condensed
                keyField="id"
                data={state.locations}
                columns={[
                  { dataField: "location_id", text: "Location ID" },
                  { dataField: "location_name", text: "Name" },
                  { dataField: "location_description", text: "Description" },
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

export default LocationPage;
