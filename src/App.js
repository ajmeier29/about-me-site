import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import FrontPage from './FrontPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <FrontPage />
    </ChakraProvider>
  );
}

export default App;
