import React from "react";
import { MyNewComponent } from "@johannchen/ui-story";
import { Link } from "@reach/router";

export default () => {
  return (
    <div>
      <h1>My Gastby Site</h1>
      <MyNewComponent text="Share Component" />
      <div>
        <Link to="/app">Dynamic App</Link>
      </div>
    </div>
  );
};
