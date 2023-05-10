import { VStack, Image } from '@chakra-ui/react';
import { WelcomMessage } from './Text';
import BottomCards from './BottomCards';

const About = props => {
  return (
    <VStack spacing={8}>
      <Image
        src="./andrew-young-milo.jpg"
        borderRadius={'full'}
        width="250px"
      />
      <WelcomMessage />
      <BottomCards />
    </VStack>
  );
};

export default About;
