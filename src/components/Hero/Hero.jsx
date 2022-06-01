import Button from '../Button';
import Zipper from '../Zipper';
import FadeIn from '../../animations/FadeIn';

const HeroBox = ({ i }) => {
  return (
    <div className='bg-slate-800 h-64 flex items-center justify-center rounded-xl  relative'>
      <Zipper />
      <span className='text-slate-500'>{i}</span>
    </div>
  );
};

const Hero = ({ head, sub }) => {
  const boxes = ['Design', 'develop', 'Test', 'Deploy'].map((i) => (
    <FadeIn rootMargin='100px'>
      <HeroBox i={i} key={i} />
    </FadeIn>
  ));
  return (
    <div className='xl:h-screen flex bg-slate-900 xl:py-0 py-12'>
      <div className='md:p-10 p-5 text-center max-w-screen-xl  w-full  m-auto 2xl:scale-110 '>
        <FadeIn>
          <h1 className='sm:text-6xl text-4xl text-slate-300 sm:mb-4 mb-6 uppercase tracking-wider font-black'>
            {head}
          </h1>
        </FadeIn>
        <FadeIn>
          <h2 className='sm:text-3xl text-xl  text-slate-500 sm:mb-16 mb-8 font-extralight tracking-wider max-w-screen-md mx-auto'>
            {sub}
          </h2>
        </FadeIn>
        <div className='mx-auto grid xl:grid-cols-4 md:grid-cols-2 md:gap-10 gap-5 md:mb-16 mb-8'>
          {boxes}
        </div>
        <FadeIn>
          <Button type='primary'>Sign Up</Button>
          <Button type='ghost'>Learn More</Button>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
