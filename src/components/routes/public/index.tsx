import React, { Suspense } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import PublicLayout from 'src/components/layouts/public';
import Home from 'src/components/routes/public/home';
import PokemonDetail from 'src/components/routes/public/pokemon-detail';

const PublicRoutes: React.FC<{}> = () => {
  return (
    <PublicLayout>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<PokemonDetail />} />
          <Route element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </PublicLayout>
  );
};

export default PublicRoutes;