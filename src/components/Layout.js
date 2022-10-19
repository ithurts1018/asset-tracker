import { Sidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import trackLabsLogo from "../images/TrackLabs.png";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        backgroundColor: "#1565c0",
      }}
    >
      <Sidebar>
        <div>
          <img src={trackLabsLogo} style={{ width: 200 }} alt="logo" />
          <NavLink
            to="/asset"
            className="btn px-4 my-2"
            style={({ isActive }) => {
              return isActive
                ? {
                    backgroundColor: "#1565c0",
                    color: "#fbc02d",
                    borderRadius: 10,
                    textDecoration: "none",
                  }
                : null;
            }}
          >
            <div className="d-flex align-items-around" style={{ width: 150 }}>
              <div className="w-25">
                <i className="fa-solid fa-box fa-2xl mr-4"></i>
              </div>
              <div className="ml-4 my-auto">Asset</div>
            </div>
          </NavLink>
          <NavLink
            to="/assignee"
            className="btn px-4 my-2"
            style={({ isActive }) => {
              return isActive
                ? {
                    backgroundColor: "#1565c0",
                    color: "#fbc02d",
                    borderRadius: 10,
                  }
                : null;
            }}
          >
            <div className="d-flex align-items-around" style={{ width: 150 }}>
              <div className="w-25">
                <i className="fa-solid fa-user fa-2xl mr-4"></i>
              </div>
              <div className="ml-4 my-auto">Assignee</div>
            </div>
          </NavLink>
          <NavLink
            to="/location"
            className="btn px-4 my-2"
            style={({ isActive }) => {
              return isActive
                ? {
                    backgroundColor: "#1565c0",
                    color: "#fbc02d",
                    borderRadius: 10,
                  }
                : null;
            }}
          >
            <div className="d-flex align-items-around" style={{ width: 150 }}>
              <div className="w-25">
                <i className="fa-solid fa-location-dot fa-2xl mr-4"></i>
              </div>
              <div className="ml-4 my-auto">Location</div>
            </div>
          </NavLink>
        </div>
      </Sidebar>
    </div>
  );
};

export default Layout;
