import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <div className='relative'>
      <div className='border-t border-slate-800 fixed inset-x-0 top-0 z-10'></div>
      <SideBar />
      <div className='bg-slate-900 2xl:ml-32 ml-16 box-border'>
        <Routes>
          <Route
            path='/m'
            element={
              <Hero
                key='1'
                head='Mike Gulline'
                sub='Professional front end web developer with a passion for React JS and Tailwindcss'
              />
            }
          />
          <Route
            path='/i'
            element={
              <Hero
                key='12'
                head='ModGlo Skincare'
                sub='Professional front end web developer with a passion for React JS and Tailwindcss'
              />
            }
          />
          <Route
            path='/k'
            element={
              <Hero
                key='3'
                head='TailwindCSS'
                sub='Professional front end web developer with a passion for React JS and Tailwindcss'
              />
            }
          />
          <Route
            path='/e'
            element={
              <Hero
                key='4'
                head='Resume'
                sub='Professional front end web developer with a passion for React JS and Tailwindcss'
              />
            }
          />
          <Route
            path='/g'
            element={
              <Hero
                key='5'
                head='Contact'
                sub='Professional front end web developer with a passion for React JS and Tailwindcss'
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
