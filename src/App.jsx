import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Registration from './pages/Registration';

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element ={<Layout/>}>
        <Route path = "" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
    )
  );

  return <RouterProvider router={myRoute} />;
};

export default App;
