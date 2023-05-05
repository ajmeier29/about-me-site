import { HStack, Card, Image, Center } from '@chakra-ui/react';

const BottomCards = props => {
  return (
    <Center marginRight={'165px'}>
      <HStack spacing={150}>
        <Card title="Emotion Code Certified" />
        <Image width="200px" src="./emotion-code-cert.jpg" />
        <Image width="200px" src="./body-code-cert.png" />
      </HStack>
    </Center>
  );
};

export default BottomCards;
