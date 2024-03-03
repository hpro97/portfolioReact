
import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router';

import home from './src/components/home';
import gallery from './src/components/gallery';
import project from './src/components/project';
import contact from './src/components/contact';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<home />} />
      <Route path="/gallery" element={<gallery />} />
      <Route path="/project/:projectId" element={<project />} />
      <Route path="/contact" element={<contact />} />
    </ReactRoutes>
  );
};

export default Routes;
