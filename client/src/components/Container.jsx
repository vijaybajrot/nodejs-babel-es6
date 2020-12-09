import React from "react";
import { Box } from "@chakra-ui/core";

const FullContainer = ({ children }) => {
  return <Box width={"100%"}>{children}</Box>;
};

export const Container = ({ children }) => {
  return (
    <Box width={"1000px"} maxW={"1200px"} marginX={"auto"}>
      {children}
    </Box>
  );
};

Container.Full = FullContainer;
