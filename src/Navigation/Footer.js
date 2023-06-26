import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Wrap,
  WrapItem,
  VStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './../ColorModeSwitcher';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      position={'relative'}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <VStack>
          <Wrap>
            <WrapItem>
              <Link href={'/'}>Home</Link>
            </WrapItem>
            <WrapItem>
              <Link href={'/About'}>About</Link>
            </WrapItem>
          </Wrap>
        </VStack>
        <VStack>
          <Wrap>
            <WrapItem>
              <Text fontSize="2x1"> Call/Text Me @ (610)-390-5742</Text>
            </WrapItem>
            <WrapItem>
              <Text fontSize="2x1">/</Text>
            </WrapItem>
            <WrapItem>
              <Text fontSize="2x1"> Email Me @ ajmeier29@protonmail.com</Text>
            </WrapItem>
            <WrapItem>
              <ColorModeSwitcher justifySelf="flex-end" />
            </WrapItem>
          </Wrap>
        </VStack>
      </Container>
    </Box>
  );
}
