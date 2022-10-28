import React from "react";
import { LoginSetup } from "@components/organisms/LogIn";
import { ResponsiveAppBar } from "@components/molecules/ResponsiveAppBar";

const Login = () => {
  return (
    <main>
      <ResponsiveAppBar />
      <LoginSetup />
    </main>
  );
};

export default Login;
