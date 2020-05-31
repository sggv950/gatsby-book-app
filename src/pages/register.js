import React, { useState, useContext } from "react";
import { FirebaseContext } from "../components/Firebase";
import { Form, Input, Button } from "../components/common";

const Register = () => {
  const { firebase } = useContext(FirebaseContext);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    e.persist();
    setFormValues((currentValues) => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.password === formValues.confirmPassword) {
      firebase.register({
        email: formValues.email,
        password: formValues.password,
      });
    }

    console.log(formValues);
  };

  return (
    <Form onSubmit={handleSubmit}>
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
        minLength={3}
      ></Input>
      <Input
        onChange={handleInputChange}
        placeholder="confirm password"
        type="password"
        name="confirmPassword"
        value={formValues.confirmPassword}
        required
        minLength={3}
      ></Input>
      <Button type="submit" block>
        Register
      </Button>
    </Form>
  );
};

export default Register;
