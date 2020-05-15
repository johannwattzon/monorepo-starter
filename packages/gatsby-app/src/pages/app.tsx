import React from "react";
import { Router as MyRouter, RouteComponentProps, Link } from "@reach/router";

interface AppProps extends RouteComponentProps {}
const App: React.FC<AppProps> = () => {
  return (
    <div>
      <h1>Space for dynamic app</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

const Router = () => {
  return (
    <MyRouter>
      <App path="/app" />
    </MyRouter>
  );
};

export default Router;
