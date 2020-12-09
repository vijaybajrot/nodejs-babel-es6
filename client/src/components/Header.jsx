import React from "react";
import styled from "@emotion/styled";

import { Box, Stack } from "@chakra-ui/core";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Logo } from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import { Container } from "./Container";

library.add(fas);

const HeaderElement = styled.header`
  border-radius: 0.2em;
  border-bottom: 2px solid #ddd;
  margin-bottom: 0.5em;
  width: 100%;
`;

export const Header = () => (
  <HeaderElement>
    <Container>
      <Navbar>
        <Navbar.NavItem>
          <Logo />
        </Navbar.NavItem>
        <Navbar.NavItem>
          <Navbar.NavMenu>
            <Navbar.NavMenuItem>
              <Navbar.NavMenulink>Home</Navbar.NavMenulink>
            </Navbar.NavMenuItem>
            <Navbar.NavMenuItem>
              <Navbar.NavMenulink>About</Navbar.NavMenulink>
            </Navbar.NavMenuItem>
            <Navbar.NavMenuItem>
              <Navbar.NavMenulink>Gallery</Navbar.NavMenulink>
            </Navbar.NavMenuItem>
            <Navbar.NavMenuItem>
              <Navbar.NavMenulink>Contact</Navbar.NavMenulink>
            </Navbar.NavMenuItem>
          </Navbar.NavMenu>
        </Navbar.NavItem>
        <Navbar.NavItem>
          <Stack isInline spacing={3} marginY={"0.75em"}>
            <Stack isInline spacing={1}>
              <Box>
                <FontAwesomeIcon icon={["fas", "mobile-alt"]} />
              </Box>
              <Box>9772654130</Box>
            </Stack>
            <Stack isInline spacing={1}>
              <Box>
                <FontAwesomeIcon icon={["fas", "mobile-alt"]} />
              </Box>
              <Box>9772654130</Box>
            </Stack>
          </Stack>
        </Navbar.NavItem>
      </Navbar>
    </Container>
  </HeaderElement>
);
