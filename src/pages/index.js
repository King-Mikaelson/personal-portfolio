import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/navigation';
import Projects from '@/components/projects';

export default function Home() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const mainRef = useRef(null);
  // const subRef = useRef(null);


  // useEffect(() => {
  //   // const observer = new IntersectionObserver();

  //   const observer = new IntersectionObserver(([entry]) => {
  //       setIsIntersecting(entry.isIntersecting);
  //     },
  //     {root: null,
  //       rootMargin: '0px',
  //       threshold: 0.3,
  //      }
  //   );
  //   console.log(isIntersecting)
  //   observer.observe(mainRef.current);
  //   return () => observer.disconnect();
  // }, []);

  useEffect(() => {
    mainRef.current.classList.add("loaded")
  }, [])

  // console.log(isIntersecting)
  // console.log(mainRef)

  return (
    <main className='bg-[#121212]'>
    <Navigation/>
    <div className=' h-[100vh]'>
      <div ref={mainRef} className='loadin pt-32 lg:pt-56'>
      <div className='flex  justify-center items-center  lg:px-48 px-6'>
      <p className='font-BebasNeue font-semibold text-2xl lg:text-5xl text-center  lg:[line-height:1.3] lg:w-[30ch] flex justify-center items-center text-white'>A user interface engineer creating seamless and captivating digital experiences with frontend technologies and design</p>
      </div>

      <div className='lg:flex justify-center grid grid-cols-3 items-center py-12 font-BebasNeue lg:px-48 px-6 gap-3'>
        <p className='text-sm font-BebasNeue text-center text-white '>Expertise</p>
        <p className='text-sm font-BebasNeue text-center rounded-full glass-bg px-7 py-3 text-white'>HTML</p>
        <p className='text-sm font-BebasNeue text-center rounded-full glass-bg px-7 py-3 text-white'>CSS</p>
        <p className='text-sm font-BebasNeue text-center rounded-full glass-bg px-7 py-3 text-white'>JavaScript</p>
        <p className='text-sm font-BebasNeue text-center rounded-full glass-bg px-7 py-3 text-white'>React</p>
        <p className='text-sm font-BebasNeue text-center rounded-full glass-bg px-7 py-3 text-white'>Next.js</p>
        <p className='text-sm font-BebasNeue text-center rounded-full glass-bg px-7 py-3 text-white'>Vue</p>
        <p className='text-sm font-BebasNeue text-center rounded-full glass-bg px-7 py-3 text-white'>Git</p>
        <p className='text-sm font-BebasNeue text-center rounded-full glass-bg px-7 py-3 text-white'>GitHub</p>
        <p className='text-sm font-BebasNeue text-center rounded-full glass-bg px-7 py-3 text-white'>Figma</p> 
      </div>
      </div>
      <Projects/>
    </div>
    </main>

  )
}
