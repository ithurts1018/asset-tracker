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

const LoginPage = () => {
  return (
    <Modal size="md" isOpen={true} modalClassName="bg-dark">
      <Card>
        <CardHeader>
          <h3 className="text-center">TrackLabs</h3>
        </CardHeader>
        <CardBody>
          <img
            style={{ width: "100%", height: 150, borderRadius: 5 }}
            className="mb-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png"
          />
          <FormGroup>
            <Label>Username</Label>
            <Input defaultValue="admin" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" defaultValue="password" />
          </FormGroup>
        </CardBody>
        <CardFooter className="d-flex justify-content-center">
          <Link to="/asset" className="btn btn-success w-50">
            Login
          </Link>
        </CardFooter>
      </Card>
    </Modal>
  );
};

export default LoginPage;
