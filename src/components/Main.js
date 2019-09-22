import React from "react";
import InventoryList from "./InventoryList";
import Travel from "./Travel";
import { Container } from "@material-ui/core";
const Main = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <InventoryList />
      </Container>
      <Container maxWidth="sm">
        <Travel />
      </Container>
    </div>
  );
};

export default Main;
