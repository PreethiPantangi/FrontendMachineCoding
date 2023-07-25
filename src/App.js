import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NestedComments from './components/NestedComments';
import StarRating from './components/StarRating';
import React from 'react';
import Body from './components/Body';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body/>,
      children: [
        {path: '/', element: <NestedComments/>},
        {path: '/starRating', element: <StarRating/>}
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
