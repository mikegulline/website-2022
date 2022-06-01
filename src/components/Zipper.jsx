import { useState, useRef, useEffect } from 'react';

const Zipper = () => {
  const [view, setView] = useState(0);
  const scrollRef = useRef(null);
  const scrollObj = useRef(null);

  useEffect(() => {
    const events = ['scroll', 'load', 'resize'];
    events.forEach((e) =>
      window.addEventListener(e, () => setView(getOffset()))
    );

    return () => {
      events.forEach((e) =>
        window.removeEventListener(e, () => setView(getOffset()))
      );
    };
  }, []);
  useEffect(() => setView(getOffset()), []);

  function getOffset() {
    const rect = scrollRef.current.getBoundingClientRect();
    const obj = scrollObj.current.getBoundingClientRect();
    console.log('my', obj.height);
    if (rect.top > 0 && rect.top < window.innerHeight - rect.height)
      return (
        (rect.height - obj.height) *
        (1 -
          (window.innerHeight - rect.top - rect.height) /
            (window.innerHeight - rect.height))
      );

    if (rect.top <= 0) return 0;
    return rect.height - obj.height;
  }
  return (
    <div
      ref={scrollRef}
      className='bg-slate-900/40 top-2 bottom-2 lg:w-2.5 w-2 absolute left-2 rounded-full flex-none overflow-hidden shadow-inner shadow-slate-900'
    >
      <div
        ref={scrollObj}
        style={{ top: `${view}px` }}
        className='absolute left- top-0 h-10 w-full bg-blue-600 rounded-full '
      ></div>
    </div>
  );
};

export default Zipper;
