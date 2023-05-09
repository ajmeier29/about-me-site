import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

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
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
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
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};

export default NavigationBar;
