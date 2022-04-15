import React from 'react';
import './App.css';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Image,
  Link,
  Button,
} from '@chakra-ui/react';
import photoOfLee from '../src/photo_of_lee.jpg';
import SectionHeader from './components/SectionHeader';
import RoleHeader from './components/RoleHeader';
import ResponsibilitiesList from './components/ResponsibilitiesList';

function App() {
  return (
    <Box maxWidth='800px' margin='1rem auto'>
      <header>
        <Flex justifyContent='space-between' marginBottom='1.5rem'>
          <Box>
            <HStack>
              <Image
                src={photoOfLee}
                alt='Lee Taylor'
                boxSize='70px'
                borderRadius='full'
              />
              <VStack alignItems='flex-start'>
                <Text size='small'>Lee Taylor</Text>
                <Text size='small'>
                  People &amp; business focused full stack engineer
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box>
            <HStack spacing='1rem'>
              <Link>CV</Link>
              <Link>About</Link>
              <Button>GitHub</Button>
            </HStack>
          </Box>
        </Flex>
      </header>
      <main>
        <VStack spacing={1} alignItems='flex-start'>
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
          <SectionHeader text='Recent Certifications' />
          <ResponsibilitiesList
            items={[
              'Get some AWS on here',
              'Get the full stack cloud cert on here',
              'Get payment technologies on here',
              ' W3Cx – Introduction to Web Accessibility',
            ]}
          />

          <SectionHeader text='Professional Experience' />
          <RoleHeader
            title='Software Engineer'
            period='Littlepay, November 2021 - Current'
          />

          <ResponsibilitiesList items={['hiring, presenting', '', '']} />

          <RoleHeader
            title='Full Stack Developer'
            period='Charli AI, March 2021-September 2021'
          />

          <ResponsibilitiesList
            items={[
              'Front-end development with React, Redux and Typescript, contributing to feature development and building reusable UI components with Charka UI and Styled System.',
              'Back-end microservice development with Node & Express, building RESTful APIs and integrating with Postgres and other internal services. ',
              'Working closely with engineering manager and product manager to break down use cases into epics and stories, share them with the team, and facilitate integration of work across our Data Science, Back-end and Front-end stack.',
            ]}
          />

          <RoleHeader
            title='Caring responsibilities, coordinating early intervention & volunteering'
            period='2010 – 2020'
          />

          <ResponsibilitiesList
            items={[
              'Hiring, managing, and mentoring therapy assistants',
              'Developing digital resources including video modelling to target developmental goals and integrate assistive technology into daily living',
              'Volunteering – supporting families with assistive technology, school council, coaching a special needs basketball team, literacy mentoring in school setting',
            ]}
          />

          <RoleHeader
            title='Contract Analyst Programmer'
            period='Uecomm, January 2009 – November 2009 '
          />

          <ResponsibilitiesList
            items={[
              'Developed white labelled product ordering and provisioning service in ASP.NET',
              'Requirement gathering / iterating / prototyping',
              'Improving development team process across standards and procedures and incorporating agile methodologies into existing waterfall process',
            ]}
          />

          <RoleHeader
            title='Development Team Leader'
            period='Portland House Group, July 2006 – December 2008'
          />

          <ResponsibilitiesList
            items={[
              'Developed Web, Windows Service and Windows Application components. NET & SQL Server Environment',
              'Leading small team through full SDLC with rapid development cycles in financial market trading strategy ',
              'Solving problems & designing solutions across business requirements, user interaction & systems architecture',
            ]}
          />

          <RoleHeader
            title='Analyst Programmer'
            period='March 2001 – June 2006'
          />

          <RoleHeader
            title='Contract Analyst Programmer'
            period='Fortis Australia, October 2000 – March 2001'
          />

          <RoleHeader
            title='Web Developer'
            period='Spin Technologies, January 1999 – October 2000'
          />
        </VStack>
      </main>
    </Box>
  );
}

export default App;
