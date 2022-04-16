import React from 'react';

import RoleHeader from './RoleHeader';
import ResponsibilitiesList from './ResponsibilitiesList';

const Role = (props: any) => {
  return (
    <>
      <RoleHeader
        title={props.title}
        period={props.period}
        employer={props.employer}
      />

      <ResponsibilitiesList items={props.items} />
    </>
  );
};

export default Role;
