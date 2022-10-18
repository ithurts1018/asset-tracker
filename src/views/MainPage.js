import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import AssetForm from "./asset/AssetForm";
import AssetPage from "./asset/AssetPage";
import AssigneeForm from "./assignee/AssigneeForm";
import AssigneePage from "./assignee/AssigneePage";
import initialState from "./initialState";
import LocationPage from "./location/LocationPage";
import LoginPage from "./login/LoginPage";
import { reducer } from "./reducer";

const Main = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Routes>
        <Route
          path="/login"
          name="Login Page"
          element={
            <>
              <LoginPage />
            </>
          }
        />
        <Route
          path="/asset"
          name="Asset Page"
          element={
            <>
              <AssetPage state={state} dispatch={dispatch} />
              <AssetForm state={state} dispatch={dispatch} />
            </>
          }
        />
        <Route
          path="/assignee"
          name="Assignee Page"
          element={
            <>
              <AssigneePage state={state} dispatch={dispatch} />
              <AssigneeForm state={state} dispatch={dispatch} />
            </>
          }
        />
        <Route
          path="/location"
          name="Location Page"
          element={<LocationPage state={state} dispatch={dispatch} />}
        />
      </Routes>
    </>
  );
};

export default Main;
