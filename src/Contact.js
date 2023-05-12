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
} from '@chakra-ui/react';

const Contact = props => {
  return (
    <Center marginTop={'20%'}>
      <Box>
        <HStack>
          <EmailForm />
          <ContactBox />
        </HStack>
      </Box>
    </Center>
  );
};

const EmailForm = props => {
  return (
    <Box backgroundColor="grey" padding="50px">
      <ContactBox backgroundColor="white">
        <HStack>
          <Box>
            <ContactForm />
          </Box>
          <Flex>
            <Text color="grey" align={'center'}>
              Contact Me for any details about Energy work that. Contact Me for
              any details about Energy work that.
            </Text>
          </Flex>
        </HStack>
      </ContactBox>
    </Box>
  );
};

const ContactForm = props => {
  return (
    <VStack spacing={5} margin="50px">
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
      <Box borderRadius="xl" background={props.backgroundColor} boxShadow="2xl">
        {props.children}
      </Box>
    </Center>
  );
};

export default Contact;
