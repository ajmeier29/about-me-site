import {
  Center,
  Box,
  HStack,
  Textarea,
  Input,
  VStack,
  Button,
  Text,
  Flex,
  Divider,
} from '@chakra-ui/react';

const Contact = props => {
  return (
    <Center margin="10%">
      <Box>
        <EmailForm />
        <ContactBox />
      </Box>
    </Center>
  );
};

const EmailForm = props => {
  return (
    <ContactBox backgroundColor="white">
      <HStack>
        <Center>
          <Box width="55%" boxShadow={'2xl'} borderRadius="2xl" margin="2%">
            <ContactForm />
          </Box>
          <Flex minHeight="25vh" width="25%">
            <ContactFormText />
          </Flex>
        </Center>
      </HStack>
    </ContactBox>
  );
};

const ContactFormText = props => {
  return (
    <Box>
      <Box>
        <Text as="b" color="grey" fontSize={'3xl'}>
          Interested in Energy Work?
        </Text>
      </Box>
      <Box marginTop={5}>
        <ContactMessageText textAlign="left" fontSize="2xl">
          Book A Demo
        </ContactMessageText>
        <ContactMessageText textAlign="left" fontSize="lg">
          Book a free 30 minute demo session today. I will explain why removing
          trapped emotions in the body is important as well as
        </ContactMessageText>
        <ContactMessageText>
          _________________________________
        </ContactMessageText>
      </Box>
    </Box>
  );
};

const ContactMessageText = props => {
  return (
    <Box>
      <Text
        as={props.as}
        textAlign={props.textAlign}
        color="grey"
        fontSize={props.fontSize}
      >
        {props.children}
      </Text>
    </Box>
  );
};

const ContactForm = props => {
  return (
    <VStack spacing={5} margin="15%">
      <FormInput id="fName" placeholder="First Name" />
      <FormInput id="lName" placeholder="Last Name" />
      <FormInput id="emailAddress" placeholder="Email Address" />
      <FormTextArea />
      <SubmitButton />
    </VStack>
  );
};

const SubmitButton = props => {
  return <Button colorScheme={'blue'}>Submit</Button>;
};

const FormTextArea = props => {
  return (
    <Textarea
      color={'grey'}
      _placeholder={{ color: 'inherit' }}
      borderColor={'grey'}
      value="Optional Message"
    />
  );
};

const FormInput = props => {
  return (
    <Input
      id={props.id}
      color={'grey'}
      _placeholder={{ color: 'inherit' }}
      borderColor={'grey'}
      placeholder={props.placeholder}
      size="md"
    />
  );
};

const ContactBox = props => {
  return (
    <Center>
      <Box borderRadius="xl" background={props.backgroundColor}>
        {props.children}
      </Box>
    </Center>
  );
};

export default Contact;
