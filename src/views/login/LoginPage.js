import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormGroup,
  Input,
  Label,
  Modal,
} from "reactstrap";
import trackLabsLogo from "../../images/TrackLabsLoginLogo.png";

const LoginPage = () => {
  return (
    <Modal size="md" isOpen={true} modalClassName="bg-dark">
      <Card>
        <CardBody>
          <div className="text-center my-2">
            <img src={trackLabsLogo} style={{ width: "70%" }} alt="logo" />
          </div>
          <FormGroup>
            <Label>Username</Label>
            <Input defaultValue="admin" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" defaultValue="password" />
          </FormGroup>
          <div className="d-flex justify-content-center mt-4 mb-2">
            <Link to="/asset" className="btn btn-success w-50">
              Login
            </Link>
          </div>
        </CardBody>
      </Card>
    </Modal>
  );
};

export default LoginPage;
