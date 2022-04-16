import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { BiCheck } from 'react-icons/bi';
import React from 'react';

const ResponsibilitiesList = (props: any) => {
  return (
    <List size='small' paddingBottom='1rem'>
      {props.items.map((item: any, counter: any) => (
        <>
          <ListItem key={counter}>
            <ListIcon as={BiCheck} color='green.500' />

            {item}
          </ListItem>
        </>
      ))}
    </List>
  );
};

export default ResponsibilitiesList;
