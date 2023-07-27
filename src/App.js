import React from 'react';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import NestedComments from './components/NestedComments/NestedComments';
import Modal from './components/Modal/Modal';
import Tab from './components/Tab/Tab';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body/>,
      children: [
        {path: '/', element: <NestedComments/>},
        {path: '/modal', element: <Modal/>},
        {path: '/tab', element: <Tab/>}
      ]
    }
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={appRouter} />
    </React.Fragment>
  );
}

export default App;
