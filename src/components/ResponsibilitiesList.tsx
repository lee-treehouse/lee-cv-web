import { UnorderedList, ListItem } from '@chakra-ui/react';
import React from 'react';

const ResponsibilitiesList = (props: any) => {
  return (
    <UnorderedList size='small' paddingBottom='1rem'>
      {props.items.map((item: any, counter: any) => (
        <ListItem key={counter}>{item}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default ResponsibilitiesList;
