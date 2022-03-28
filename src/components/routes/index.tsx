import React, { Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import PublicRoute from 'src/components/routes/public';

const GeneralRoutes: React.FC<{}> = () => {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/*" element={<PublicRoute />} />
          <Route element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default GeneralRoutes;