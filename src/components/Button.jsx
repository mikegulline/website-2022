const Button = ({ className, children, type }) => {
  let typeClasses;
  switch (type) {
    case 'ghost':
      typeClasses =
        ' sm:inline-block sm:w-auto w-full block px-10 py-4 rounded-xl border-2 border-slate-500 text-slate-500 bg-transparent text-lg ';
      break;
    default:
      // primary
      typeClasses =
        ' sm:inline-block sm:mb-0 sm:w-auto  w-full mb-4 block px-10 py-4 rounded-xl border-2 border-blue-700 bg-blue-700 text-blue-200  hover:bg-transparent text-lg mr-5 ';
      break;
  }

  return <button className={className + typeClasses}>{children}</button>;
};

export default Button;
