import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Main from './components/leyout/Main';
import Service from './components/Service/Service';
import Skill from './components/Skill/Skill';

function App() {

  const router = createBrowserRouter([
      {
      path: '/',
      element: <Main></Main>,
      children: ([
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/about',
          element:<About></About>
        },
        {
          path: '/service',
          element:<Service></Service>
        },
        {
          path: '/skill',
          element:<Skill></Skill>
        },
        {
          path: '/footer',
          element:<Footer></Footer>
        }
      ])
    }
    ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
