import { Image, Center, Wrap, WrapItem } from '@chakra-ui/react';

const BottomCards = props => {
  return (
    <Center>
      <Wrap spacing={100} justify="center">
        <WrapItem>
          <Center>
            <Image width="200px" src="./emotion-code-cert.jpg" />
          </Center>
        </WrapItem>
        <WrapItem>
          <Center>
            <Image width="200px" src="./body-code-cert.png" />
          </Center>
        </WrapItem>
      </Wrap>
    </Center>
  );
};

export default BottomCards;
