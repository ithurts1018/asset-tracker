import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Col, Container, Row } from "reactstrap";
import { actions } from "../reducer";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const AssigneePage = ({ state, dispatch }) => {
  return (
    <>
      <div style={{ height: 120 }}></div>
      <div>
        <Container>
          <ToolkitProvider
            keyField="assignee_id"
            data={state.assignees}
            columns={[
              {
                dataField: "assignee_id",
                text: "Assignee ID",
                searchable: true,
              },
              {
                dataField: "employee_id",
                text: "Employee ID",
                searchable: true,
              },
              { dataField: "name", text: "Name", searchable: true },
              {
                dataField: "description",
                text: "Description",
                searchable: true,
              },
              { dataField: "status", text: "Status" },
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
                            type: actions.TRACK_LOCATION,
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
                      Add Assignee
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

export default AssigneePage;
