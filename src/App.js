import "./App.css";
import MainPage from "./views/MainPage";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <div className="App d-flex vh-100">
        <Layout />
        <div>
          <MainPage />
        </div>
      </div>
    </>
  );
};

export default App;
