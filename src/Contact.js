import {
  Center,
  AbsoluteCenter,
  Box,
  HStack,
  Textarea,
  Input,
  VStack,
  Button,
  Text,
  Flex,
  Wrap,
  WrapItem,
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
            <Text color="grey" align={'top'}>
              Contact Me for any details about Energy work that. Contact Me for
              any details about Energy work that.Contact Me for any details
              about Energy work that.
            </Text>
          </Flex>
        </Center>
      </HStack>
    </ContactBox>
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
