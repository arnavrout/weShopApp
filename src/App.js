import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Products from './components/Products';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

function App() {

  const router = createBrowserRouter(createRoutesFromElements (
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))

  return (
    <div className='App'>
      {/* <Products/> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
