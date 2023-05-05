import { Box, Grid, VStack, Image } from '@chakra-ui/react';
import { WelcomMessage } from './Text';
import { Contact } from './Text';
import BottomCards from './BottomCards';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

// This function is using spread syntax to unload all props into the Text field
const FrontPage = props => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Image
            src="./andrew-young-milo.jpg"
            borderRadius={'full'}
            width="250px"
          />
          <WelcomMessage textalignment="left" />
        </VStack>
        <BottomCards />
        <Contact />
      </Grid>
    </Box>
  );
};

export default FrontPage;
