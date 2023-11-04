import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import MainPage from '../pages/mainPage/components/MainPage';
import ErrorPage from '../pages/errorPage/components/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<MainPage />} />
    </Route>
  )
);

const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
