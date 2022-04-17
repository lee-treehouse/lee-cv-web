import { Box, Heading, Divider } from '@chakra-ui/react';
import React from 'react';

interface props {
  text: string;
}

export const SectionHeader: React.FunctionComponent<props> = ({ text }) => {
  return (
    <Box width='100%'>
      <Heading as='h3' size='large' textTransform='uppercase'>
        {text}
      </Heading>
      <Divider marginBottom='0.5rem' />
    </Box>
  );
};

export default SectionHeader;
