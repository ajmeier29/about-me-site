import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  HStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';

const NavigationBar = props => {
  return (
    <Box>
      <Flex borderWidth="1px" borderRadius="5px" padding={3}>
        <Breadcrumb fontWeight="medium" fontSize="xl">
          <Wrap>
            <NavLink link="/" text="Home" />

            <NavLink link="#" text="Emotion Code" />

            <NavLink link="#" text="Body Code" />

            <NavLink link="#" text="Reiki" />

            <NavLink link="/About" text="About" />
          </Wrap>
        </Breadcrumb>
      </Flex>
      <Outlet />
    </Box>
  );
};

const NavLink = props => {
  return (
    <WrapItem>
      <BreadcrumbItem separator={'/'} spacing={2.5}>
        <Link to={props.link}>
          <BreadcrumbLink>{props.text}</BreadcrumbLink>
        </Link>
      </BreadcrumbItem>
    </WrapItem>
  );
};

export default NavigationBar;
