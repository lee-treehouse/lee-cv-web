import React from 'react';
import { Heading, Text, Badge, HStack, Box } from '@chakra-ui/react';
import ResponsibilitiesList from './ResponsibilitiesList';

interface props {
  title: string;
  period: string;
  items?: string[];
  employer?: string;
}

const Role: React.FunctionComponent<props> = ({
  title,
  period,
  items,
  employer,
}) => {
  return (
    <Box marginBottom='1.5rem'>
      <Heading as='h4' size='small' marginBottom='0.5rem'>
        {title}
      </Heading>
      <HStack>
        <Text fontStyle='italic'>{employer}</Text>
        <Badge colorScheme='purple'>{period}</Badge>
      </HStack>
      {items && <ResponsibilitiesList items={items} />}
    </Box>
  );
};

export default Role;
