import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Col, Container, Row } from "reactstrap";
import { actions } from "../reducer";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const LocationPage = ({ state, dispatch }) => {
  return (
    <>
      <div style={{ height: 120 }}></div>
      <div>
        <Container>
          <ToolkitProvider
            keyField="id"
            data={state.locations}
            columns={[
              {
                dataField: "location_id",
                text: "Location ID",
                searchable: true,
              },
              { dataField: "name", text: "Name", searchable: true },
              {
                dataField: "description",
                text: "Description",
                searchable: true,
              },
              {
                dataField: "",
                text: "Actions",
                formatter: (cell, row) => {
                  return (
                    <>
                      <Button
                        color="info"
                        onClick={() =>
                          dispatch({
                            type: actions.TRACK_ASSET,
                            payload: row.location,
                          })
                        }
                      >
                        Track
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
                          type: actions.SHOW_ASSIGNEE_FORM,
                          payload: true,
                        })
                      }
                    >
                      Add Location
                    </Button>
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

export default LocationPage;
