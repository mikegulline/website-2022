import SideBar from './components/SideBar/SideBar';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <div className='relative'>
      <div className='border-t border-slate-800 fixed inset-x-0 top-0 z-10'></div>
      <SideBar />
      <div className='bg-slate-900 2xl:ml-32 ml-16 box-border'>
        <Hero
          head='Mike Gulline'
          sub='Providing a thoughtful approach to modern design and front end web development with React JS.'
        />
        <Hero
          head='Mike Gulline'
          sub='Providing a thoughtful approach to modern design and front end web development with React JS.'
        />
        <Hero
          head='Mike Gulline'
          sub='Providing a thoughtful approach to modern design and front end web development with React JS.'
        />
      </div>
    </div>
  );
}

export default App;
