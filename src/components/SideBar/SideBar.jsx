const SideBarMenuItems = ({ item }) => {
  if (item) {
    return (
      <div className='border-slate-700 hover:bg-blue-600 hover:border-blue-600 hover:text-white 2xl:w-16 2xl:h-16 w-10 h-10 rounded-full border sm:border-2  hover:cursor-pointer  mx-auto flex justify-center items-center'>
        <span>{item}</span>
      </div>
    );
  }
  return (
    <div className='grow mx-auto my-4 bg-slate-800 w-2 rounded-full'></div>
  );
};

const SideBar = ({ children }) => {
  const menu = ['M', 'I', 'K', 'E', null, 'G'];
  const items = menu.map((item, i) => <SideBarMenuItems item={item} key={i} />);
  return (
    <div className='bg-slate-900 text-slate-500 border-slate-700 fixed inset-y-0 left-0 2xl:w-32 w-16 border-r sm:border-r-2  '>
      <div className='flex flex-col 2xl:gap-6 gap-4 content-center justify-start 2xl:py-6 py-4 h-screen'>
        {items}
      </div>
    </div>
  );
};

export default SideBar;
