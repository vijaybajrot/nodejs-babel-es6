import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";

import { Container } from "./components/Container";
import { Header } from "./components/Header";

import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <>
        <Header />
        <Container>
          <Button>Chakra UI Btn</Button>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
