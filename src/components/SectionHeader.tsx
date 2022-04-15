import { Heading } from '@chakra-ui/react';
import React from 'react';

export const SectionHeader = (props: any) => {
  return (
    <Heading as='h3' size='medium' color='blue'>
      {props.text}
    </Heading>
  );
};

export default SectionHeader;
