import React, { useState, useContext } from "react";
import { navigate } from "gatsby";
import { FirebaseContext } from "../components/Firebase";
import { Form, Input, Button, ErrorMessage } from "../components/common";
import SEO from "../components/seo";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const { firebase } = useContext(FirebaseContext);
  const [errormessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValues;
    firebase
      .login({ email, password })
      .then(() => navigate("/"))
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  const handleInputChange = (e) => {
    e.persist();
    setErrorMessage("");
    setFormValues((currentValues) => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Input
          value={formValues.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          required
        />
        <Input
          value={formValues.password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="password"
          required
        />
        {!!errormessage && <ErrorMessage>{errormessage}</ErrorMessage>}
        <Button type="submit" block>
          Login
        </Button>
      </Form>
    </section>
  );
};

export default Login;
