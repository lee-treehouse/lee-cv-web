import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

const RoleHeader = (props: any) => {
  return (
    <>
      <Heading as='h4' size='small'>
        {props.title}
      </Heading>
      <Text fontStyle='italic' marginTop='0px'>
        {props.period}
      </Text>
    </>
  );
};

export default RoleHeader;
