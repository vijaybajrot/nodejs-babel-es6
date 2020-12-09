import React from "react";

import { Image } from "@chakra-ui/core";

import LogoImg from "./logo.png";

export const Logo = () => {
  return (
    <Image src={LogoImg} alt="Segun Adebayo" rounded={"10%"} width={`200px`} />
  );
};
