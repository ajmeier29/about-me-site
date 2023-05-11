import { VStack, Image, Wrap, WrapItem, Center } from '@chakra-ui/react';
import { WelcomMessage } from './Text';
import BottomCards from './BottomCards';

const About = props => {
  return (
    <Wrap justify={'center'} padding={10}>
      <WrapItem>
        <Center>
          <Image
            src="./andrew-young-milo.jpg"
            borderRadius={'full'}
            width="250px"
          />
        </Center>
      </WrapItem>
      <WrapItem>
        <WelcomMessage />
      </WrapItem>
      <WrapItem>
        <BottomCards />
      </WrapItem>
    </Wrap>
  );
};

export default About;
