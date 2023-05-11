import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';

const NavigationBar = props => {
  return (
    <Box>
      <Flex borderWidth="1px" borderRadius="5px" padding={3}>
        <Breadcrumb fontWeight="medium" fontSize="xl">
          <HStack>
            <NavLink link="/" text="Home" />

            <NavLink link="#" text="Emotion Code" />

            <NavLink link="#" text="Body Code" />

            <NavLink link="#" text="Reiki" />

            <NavLink link="/About" text="About" />
          </HStack>
        </Breadcrumb>
      </Flex>
      <Outlet />
    </Box>
  );
};

const NavLink = props => {
  return (
    <BreadcrumbItem separator={'/'} spacing={2.5}>
      <Link to={props.link}>
        <BreadcrumbLink>{props.text}</BreadcrumbLink>
      </Link>
    </BreadcrumbItem>
  );
};

export default NavigationBar;
