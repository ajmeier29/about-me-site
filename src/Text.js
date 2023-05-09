import { Text, Stack, Flex, Center } from '@chakra-ui/react';

const WelcomMessage = props => {
  return (
    <Flex>
      <Center>
        <TextBox margin="25px" marginBottom="10px">
          My name is Andrew Meier and I have been a software developer for over
          13 years. I have started to practice Emotion Code healing in 2022 and
          I am a Certified Emotion Code Practitioner. My objective is to reach
          as many people as I can to spread the word about Emotion Code healing
          as well as working on others to help them heal at a rate that Western
          Medicine is incapable of doing. I have been practicing Chinese
          Medicine, Chakra healing, among others and nothing has been as fast
          and immediate as the Emotion Code!
        </TextBox>
      </Center>
    </Flex>
  );
};

const TextBox = props => {
  return <Text {...props}>{props.children}</Text>;
};

const Contact = props => {
  return (
    <Stack spacing={3} marginBottom="100px">
      <Text fontSize="2x1"> Call/Text Me @ (610)-390-5742</Text>
      <Text fontSize="2x1"> Email Me @ ajmeier29@protonmail.com</Text>
    </Stack>
  );
};

export { TextBox, WelcomMessage, Contact };
