import React from 'react';
import './App.css';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Image,
  Link,
  Button,
} from '@chakra-ui/react';
import photoOfLee from '../src/photo_of_lee.jpg';
import CV from './components/CV';

function App() {
  return (
    <Box maxWidth='800px' margin='1rem auto'>
      <header>
        <Flex justifyContent='space-between' marginBottom='1.5rem'>
          <Box>
            <HStack>
              <Image
                src={photoOfLee}
                alt='Lee Taylor'
                boxSize='70px'
                borderRadius='full'
              />
              <VStack alignItems='flex-start'>
                <Text size='small'>Lee Taylor</Text>
                <Text size='small'>
                  People &amp; business focused full stack engineer
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box>
            <HStack spacing='1rem'>
              <Link>CV</Link>
              <Link>About</Link>
              <Button>GitHub</Button>
            </HStack>
          </Box>
        </Flex>
      </header>
      <main>
        <CV />
      </main>
    </Box>
  );
}

export default App;
