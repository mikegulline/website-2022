import useInview from '../hooks/useInview';

const FadeIn = ({ children, rootMargin }) => {
  const [visible, ref] = useInview(rootMargin);
  return (
    <div
      ref={ref}
      className={`transition ease-in-out ${
        visible
          ? 'opacity-100 duration-500 md:delay-100'
          : 'opacity-0 duration-1000'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
