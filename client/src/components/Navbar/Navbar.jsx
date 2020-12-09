import styled from "@emotion/styled";

import { Flex } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";
import { Link } from "@chakra-ui/core";

const Navbar = styled(Flex)`
  justify-content: space-between;
`;

const NavItem = styled(Box)`
  padding: 0.25em;
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

const NavMenuItem = styled.li`
  padding: 0.75em 1em;
  border-radius: 0.25em;
  border: 0;
  &:hover {
    background: #f56403;
    color: white;
  }
`;

const NavMenulink = styled(Link)`
  font-weight: 500;
  &:hover {
    text-decoration: none;
  }
`;

Navbar.NavItem = NavItem;
Navbar.NavMenu = NavMenu;
Navbar.NavMenuItem = NavMenuItem;
Navbar.NavMenulink = NavMenulink;

export default Navbar;
