import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';

const NavigationBar = props => {
  return (
    <Box>
      <Box borderWidth="1px" borderRadius="5px" padding={3}>
        <Breadcrumb fontWeight="medium" fontSize="xl">
          <NavLink link="/" text="Home /&nbsp;" />

          <NavLink link="#" text="Emotion Code /&nbsp;" />

          <NavLink link="#" text="Body Code /&nbsp;" />

          <NavLink link="#" text="Reiki /&nbsp;" />

          <NavLink link="/About" text="About" />
        </Breadcrumb>
      </Box>
      <Outlet />
    </Box>
  );
};

const NavLink = props => {
  return (
    <BreadcrumbItem>
      <Link to={props.link}>
        <BreadcrumbLink>{props.text}</BreadcrumbLink>
      </Link>
    </BreadcrumbItem>
  );
};

export default NavigationBar;
