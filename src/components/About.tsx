import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import SectionHeader from './SectionHeader';

const PADDING_BELOW_SECTIONS = '1.5rem';

const About = () => {
  return (
    <>
      <Box marginBottom={PADDING_BELOW_SECTIONS}>
        <SectionHeader text='About Me' />
        <Text>I&apos;ll say something here</Text>
      </Box>
      <Box marginBottom={PADDING_BELOW_SECTIONS}>
        <SectionHeader text='I Value' />{' '}
        <Text>I&apos;ll say something here</Text>
        <Box marginBottom={PADDING_BELOW_SECTIONS}></Box>
        <SectionHeader text='These are a few of my favourite things' />
        <Text>I&apos;ll say something here</Text>
      </Box>
    </>
  );
};

export default About;
