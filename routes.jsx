import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router';

import Home from './src/components/Home';
import Gallery from './src/components/Gallery';
import Project from './src/components/Project';
import Contact from './src/components/Contact';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/project/:projectId" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </ReactRoutes>
  );
};

export default Routes;

