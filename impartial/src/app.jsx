import React from "react";
import News from "./components/News";
import Header from "./components/Header";
import Container from "@material-ui/core/Container";

const App = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <News />
      </Container>
    </>
  );
};

export default App;
