import React from 'react';
import './App.css';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Image,
  Button,
  Link,
  Heading,
} from '@chakra-ui/react';
import photoOfLee from '../src/photo_of_lee.jpg';
import CV from './components/CV';
import About from './components/About';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';

const ABOUT_SECTION_ENABLED = false;

function App() {
  return (
    <Box maxWidth='800px' margin='1rem auto' paddingX='0.5rem'>
      <header>
        <Flex
          flexDirection={['column-reverse', 'row']}
          justifyContent='space-between'
          marginBottom='1.5rem'
        >
          <Box>
            <HStack>
              <Image
                src={photoOfLee}
                alt='Lee Taylor'
                boxSize='60px'
                borderRadius='full'
              />
              <VStack alignItems='flex-start' spacing={0}>
                <Heading as='h3' size='large'>
                  Lee Taylor
                </Heading>
                <Text size='small'>
                  People &amp; business focused full stack engineer
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box>
            <nav>
              <HStack spacing='1rem' justify={['flex-end']}>
                <Link as={RouterLink} to='/'>
                  CV
                </Link>
                {ABOUT_SECTION_ENABLED && (
                  <Link as={RouterLink} to='/about'>
                    About
                  </Link>
                )}

                <Link href='https://github.com/lee-treehouse' isExternal>
                  <Button>GitHub</Button>
                </Link>
              </HStack>
            </nav>
          </Box>
        </Flex>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<CV />} />
          <Route path='about' element={<About />} />
        </Routes>
      </main>
    </Box>
  );
}

export default App;
