import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';

const NavigationBar = props => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      marginBottom={'25px'}
      height="55px"
    >
      <Breadcrumb
        fontWeight="medium"
        fontSize="xl"
        marginTop="12px"
        marginLeft="15px"
        marginBottom={150}
      >
        <BreadcrumbItem>
          <Link to="/">
            <BreadcrumbLink>Home</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Emotion Code</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Body Code</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Reiki</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Link to="/About">
            <BreadcrumbLink>About</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <Outlet />
    </Box>
  );
};

export default NavigationBar;
