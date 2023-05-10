import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';

const NavigationBar = props => {
  return (
    <Box borderWidth="1px" borderRadius="lg" marginBottom={'10%'} height="5%">
      <Breadcrumb
        fontWeight="medium"
        fontSize="xl"
        marginTop="0.75%"
        marginLeft="1%"
        marginBottom="10%"
      >
        <Wrap>
          <WrapItem>
            <BreadcrumbItem>
              <Link to="/">
                <BreadcrumbLink>Home /</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </WrapItem>

          <WrapItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Emotion Code /</BreadcrumbLink>
            </BreadcrumbItem>
          </WrapItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Body Code</BreadcrumbLink>
          </BreadcrumbItem>

          <WrapItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Reiki /</BreadcrumbLink>
            </BreadcrumbItem>
          </WrapItem>

          <WrapItem>
            <BreadcrumbItem>
              <Link to="/About">
                <BreadcrumbLink>About</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </WrapItem>
        </Wrap>
      </Breadcrumb>
      <Outlet />
    </Box>
  );
};

export default NavigationBar;
