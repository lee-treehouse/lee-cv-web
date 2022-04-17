import React from 'react';
import Role from './Role';
import SectionHeader from './SectionHeader';
import ResponsibilitiesList from './ResponsibilitiesList';
import { Box } from '@chakra-ui/react';

const PADDING_BELOW_SECTIONS = '1.5rem';

const CV = () => {
  return (
    <>
      <Box marginBottom={PADDING_BELOW_SECTIONS}>
        <SectionHeader text='Summary' />
        <ResponsibilitiesList
          items={[
            '10 years+ experience in web development',
            'Recent returnee to industry after time out raising children',
            'Confidently skilled proactive all-rounder, efficient and organized',
            'Excellent communication and interpersonal skills',
            'Grasps complex business and technical issues quickly',
          ]}
        />
      </Box>

      <Box marginBottom={PADDING_BELOW_SECTIONS}>
        <SectionHeader text='Recent Certifications' />
        <ResponsibilitiesList
          items={[
            'IBM Full Stack Cloud Developer Professional Certificate - April 2022 ',
            'The future of Payment Technologies - October 2021 ',
            'Introduction to Web Accessibility - September 2021 ',
          ]}
        />
      </Box>

      <Box marginBottom={PADDING_BELOW_SECTIONS}>
        <SectionHeader text='Professional Experience' />

        <Role
          title='Software Engineer'
          period='November 2021 - Current'
          employer='Littlepay'
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
