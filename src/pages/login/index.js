import React from "react";
import * as s from "./styles";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <s.LoginContainer>
      <h2>Login</h2>
      <s.LoginForm onSubmit={handleSubmit}>
        <s.Input type="text" placeholder="Username" />
        <s.Input type="password" placeholder="Password" />
        <s.Button type="submit">Login</s.Button>
      </s.LoginForm>
    </s.LoginContainer>
  );
};

export default Login;
