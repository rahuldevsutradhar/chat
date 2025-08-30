import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Error from './pages/Error';
import AllUser from './pages/AllUser';
import BlockUser from './pages/BlockUser';

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element ={<Layout/>}>
        <Route path = "" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/allUser" element={<AllUser />} />
        <Route path="/blockUser" element={<BlockUser />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return <RouterProvider router={myRoute} />;
};

export default App;
