import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Main from './components/leyout/Main';
import Service from './components/Service/Service';
import Skill from './components/Skill/Skill';
import Foodorder from './Foodorder.json';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: ([
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
            
          },
        },
        {
          path: '/about',
          element: <About></About>,
          loader: async () => { 
            return fetch('https://jsonplaceholder.typicode.com/posts')
          }
        },
        {
          path: '/service',
          element: <Service></Service>,
          loader: async () => { 
            return fetch('Foodorder.json')
              
          }
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
