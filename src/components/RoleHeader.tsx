import { Heading, Text, Badge, HStack } from '@chakra-ui/react';
import React from 'react';

const RoleHeader = (props: any) => {
  return (
    <>
      <Heading as='h4' size='small'>
        {props.title}
      </Heading>
      <HStack>
        <Text fontStyle='italic' marginTop='0px'>
          {props.employer}
        </Text>
        <Badge colorScheme='purple'>{props.period}</Badge>
      </HStack>
    </>
  );
};

export default RoleHeader;
