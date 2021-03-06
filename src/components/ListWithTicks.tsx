import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { BiCheck } from 'react-icons/bi';
import React from 'react';

interface props {
  items: string[];
}

const ListWithTicks: React.FunctionComponent<props> = ({ items }) => {
  return (
    <List size='small'>
      {items.map((item: any, counter: any) => (
        <ListItem key={counter}>
          <ListIcon as={BiCheck} color='green.500' key={counter + '-image'} />
          {item}
        </ListItem>
      ))}
    </List>
  );
};

export default ListWithTicks;
