import { NavLink } from 'react-router-dom';

const SideBarMenuItems = ({ item }) => {
  const menuItemClassRoot =
    ' 2xl:w-16 2xl:h-16 w-10 h-10 rounded-full border  hover:cursor-pointer  mx-auto flex justify-center items-center';
  const menuItemClasses =
    ' border-slate-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white';
  const menuItemClassesActive =
    ' border-blue-600 bg-blue-600 text-white hover:bg-white hover:border-white hover:text-blue-600';
  if (item) {
    return (
      <NavLink to={`/${item}`}>
        {({ isActive }) => (
          <div
            className={
              menuItemClassRoot +
              (isActive ? menuItemClassesActive : menuItemClasses)
            }
          >
            {item}
          </div>
        )}
      </NavLink>
    );
  }
  return (
    <div className='grow mx-auto my-4 bg-slate-800 w-2 rounded-full'></div>
  );
};

const SidebarWrapper = ({ children }) => {
  return (
    <div className='bg-slate-900 text-slate-500 border-slate-700 fixed inset-y-0 left-0 2xl:w-32 w-16 border-r  '>
      <div className='flex flex-col 2xl:gap-6 gap-4 content-center justify-start 2xl:py-6 py-4 h-screen'>
        {children}
      </div>
    </div>
  );
};

const SideBar = () => {
  const menu = ['M', 'I', 'K', 'E', null, 'G'];
  const items = menu.map((item, i) => <SideBarMenuItems item={item} key={i} />);
  return <SidebarWrapper>{items}</SidebarWrapper>;
};

export default SideBar;
