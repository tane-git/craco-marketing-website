import React from 'react';
import { Sections } from '../Sections';
import { Welcome } from './components/Welcome/'
// import { Welcome } from '../Welcome';

export const Content: React.FC = () => {
  return (
    <div>
      <Welcome />
      <Sections />
      {/* <CallToAction /> */}
    </div>
  )
}