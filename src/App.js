import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routeCollection from './collections/routeCollection';
import Layout from './components/layout/Layout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            <Route path='/' element={<Layout />}>
            {
              routeCollection.map(route => (
                <Route path={route.path} element={route.element} />
              ))
            }
            </Route>
          }
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
