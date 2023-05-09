import { Box, Grid, VStack, Image } from '@chakra-ui/react';
import { WelcomMessage } from './Text';
import { Contact } from './Text';
import BottomCards from './BottomCards';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import NavigationBar from './Navigation/NavigationBar';

// This function is using spread syntax to unload all props into the Text field
const FrontPage = props => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <NavigationBar />
        <VStack spacing={8}>
          <Image
            src="./andrew-young-milo.jpg"
            borderRadius={'full'}
            width="250px"
          />
          <WelcomMessage />
        </VStack>
        <BottomCards />
        <Contact />
        <ColorModeSwitcher justifySelf="flex-end" />
      </Grid>
    </Box>
  );
};

export default FrontPage;
