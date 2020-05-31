import React, { useState, useContext } from "react";
import { FirebaseContext } from "../components/Firebase";
import { Form, Input, Button, ErrorMessage } from "../components/common";

const Register = () => {
  const { firebase } = useContext(FirebaseContext);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const [errormessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    e.persist();
    setErrorMessage("");
    setFormValues((currentValues) => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.password === formValues.confirmPassword) {
      firebase
        .register({
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
        })
        .catch((err) => {
          setErrorMessage(err.message);
        });
    } else {
      setErrorMessage("Password & confirm password fields must match!");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleInputChange}
        placeholder="username"
        type="text"
        name="username"
        value={formValues.username}
        required
      ></Input>
      <Input
        onChange={handleInputChange}
        placeholder="email"
        type="email"
        name="email"
        value={formValues.email}
        required
      ></Input>
      <Input
        onChange={handleInputChange}
        placeholder="password"
        type="password"
        name="password"
        value={formValues.password}
        required
        minLength={6}
      ></Input>
      <Input
        onChange={handleInputChange}
        placeholder="confirm password"
        type="password"
        name="confirmPassword"
        value={formValues.confirmPassword}
        required
        minLength={6}
      ></Input>
      {!!errormessage && <ErrorMessage>{errormessage}</ErrorMessage>}
      <Button type="submit" block>
        Register
      </Button>
    </Form>
  );
};

export default Register;
