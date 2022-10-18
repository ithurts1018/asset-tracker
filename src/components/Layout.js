import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <div className="mt-5">
          <h2>Asset Tracker</h2>
          <Menu className="mt-5">
            <MenuItem>
              <Link to="/asset" className="btn">
                Asset
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/assignee" className="btn">
                Assignee
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/assignee" className="btn">
                Location
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
};

export default Layout;
