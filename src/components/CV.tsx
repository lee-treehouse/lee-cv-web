import React from 'react';
import Role from './Role';
import SectionHeader from './SectionHeader';
import ListWithTicks from './ListWithTicks';
import { Box, HStack, Tag } from '@chakra-ui/react';

const PADDING_BELOW_SECTIONS = '1.5rem';

const CV = () => {
  return (
    <>
      <Box marginBottom={PADDING_BELOW_SECTIONS}>
        <SectionHeader text='Summary' />
        <ListWithTicks
          items={[
            '10 years+ experience in web development',
            'Excellent communication and interpersonal skills',
            'Grasps complex business and technical issues quickly',
            'Confidently skilled proactive all-rounder, efficient and organized',
            'Recent returnee to industry after time out raising children',
          ]}
        />
      </Box>

      <Box marginBottom={PADDING_BELOW_SECTIONS}>
        <SectionHeader text='Technologies' />
        <HStack spacing={2}>
          {[
            'Javascript',
            'Typescript',
            'React',
            'Node',
            'Redux',
            'CSS',
            'HTML',
            'SQL',
          ].map((item) => (
            <Tag size='sm' key={item} variant='solid' colorScheme='blue'>
              {item}
            </Tag>
          ))}
        </HStack>
      </Box>

      <Box marginBottom={PADDING_BELOW_SECTIONS}>
        <SectionHeader text='Recent Certifications' />
        <ListWithTicks
          items={[
            'The future of Payment Technologies - October 2021 ',
            'Introduction to Web Accessibility - September 2021 ',
          ]}
        />
      </Box>

      <Box marginBottom={PADDING_BELOW_SECTIONS}>
        <SectionHeader text='Professional Experience' />

        <Role
          title='Senior Software Engineer'
          period='September 2021 - Current'
          employer='Enablo'
        />

        <Role
          title='Software Engineer'
          period='November 2021 - September 2022'
          employer='Littlepay'
          items={[
            'Front-end development of embeddable SDK to deliver ecommerce checkout (Typescript)',
            'Maintenance and feature development in legacy JavaScript, Angular & Angularjs applications.',
            'Back-end maintenance and issue investigation in Node and Java using AWS.',
            'Working closely with the engineering manager, product manager, and client to break down complex requirements and facilitate understanding and delivery across the team.',
            'Interview Committee and Incident Response Group member, actively involved in increasing quality, communication & individual development across the business.',
          ]}
        />

        <Role
          title='Full Stack Developer'
          period='March 2021-September 2021'
          employer='Charli AI'
          items={[
            'Front-end development with React, Redux and Typescript, contributing to feature development and building reusable UI components with Charka UI and Styled System.',
            'Back-end microservice development with Node & Express, building RESTful APIs and integrating with Postgres and other internal services. ',
            'Working closely with engineering manager and product manager to break down use cases into epics and stories, share them with the team, and facilitate integration of work across our Data Science, Back-end and Front-end stack.',
          ]}
        />

        <Role
          title='Caring responsibilities, coordinating early intervention & volunteering'
          period='2010 – 2020'
          items={[
            'Hiring, managing, and mentoring therapy assistants',
            'Developing digital resources including video modelling to target developmental goals and integrate assistive technology into daily living',
            'Volunteering – supporting families with assistive technology, school council, coaching a special needs basketball team, literacy mentoring in school setting',
          ]}
        />

        <Role
          title='Contract Analyst Programmer'
          period='January 2009 – November 2009 '
          employer='Uecomm'
          items={[
            'Developed white labelled product ordering and provisioning service in ASP.NET',
            'Requirement gathering / iterating / prototyping',
            'Improving development team process across standards and procedures and incorporating agile methodologies into existing waterfall process',
          ]}
        />

        <Role
          title='Development Team Leader'
          period='July 2006 – December 2008'
          employer='Portland House Group'
          items={[
            'Developed Web, Windows Service and Windows Application components. NET & SQL Server Environment',
            'Leading small team through full SDLC with rapid development cycles in financial market trading strategy ',
            'Solving problems & designing solutions across business requirements, user interaction & systems architecture',
          ]}
        />

        <Role
          title='Analyst Programmer'
          period='March 2001 – June 2006'
          employer='Bourse Data'
        />

        <Role
          title='Contract Analyst Programmer'
          period='October 2000 – March 2001'
          employer='Fortis Australia'
        />

        <Role
          title='Web Developer'
          period='January 1999 – October 2000'
          employer='Spin Technologies'
        />
      </Box>
    </>
  );
};

export default CV;
