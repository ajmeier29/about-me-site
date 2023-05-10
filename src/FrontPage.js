import { Box, Grid } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import NavigationBar from './Navigation/NavigationBar';
import About from './About';
import Home from './Home';
import Footer from './Navigation/Footer';

// This function is using spread syntax to unload all props into the Text field
const FrontPage = props => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavigationBar />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Footer />
      </Grid>
    </Box>
  );
};

export default FrontPage;
