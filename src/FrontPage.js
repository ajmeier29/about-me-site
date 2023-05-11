import { Box, Grid, GridItem } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './Navigation/NavigationBar';
import About from './About';
import Home from './Home';
import Footer from './Navigation/Footer';

// This function is using spread syntax to unload all props into the Text field
const FrontPage = props => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid
        templateAreas={`"header"
                  "main"
                  "footer"`}
        minH="100vh"
        p={5}
      >
        <GridItem area={'header'}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<NavigationBar />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </GridItem>
        <GridItem area={'footer'}>
          <Footer />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FrontPage;
