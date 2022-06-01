import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Pages from '../Pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pages.Body />}>
          <Route index element={<Pages.BuscarPokemon />} />
          <Route path='/BuscaPokemon' element={<Outlet />}></Route>
        </Route>
        <Route path='*' element={<Pages.NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
