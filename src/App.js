import './App.css';
import { ToastContainer } from 'react-toastify';
import routes from './constants/routers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <route.layout path={route.path}>
                  <route.component />
                </route.layout>
              }
              exact
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
