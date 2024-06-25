import React, { useEffect, useRef, useState } from 'react';
import ItemType1 from './ItemType1';
import Item2 from './Item2';
import { TiChevronLeft, TiChevronRight } from 'react-icons/ti';

const Carousel = () => {
   const carouselRef = useRef();
   const [index, setIndex] = useState(0);
   const [mutex, setMutex] = useState(0);
   let carouselItems = [
      <ItemType1 />,
      <ItemType1 />,
      <ItemType1 />,
      <ItemType1 />,
      <ItemType1 />,
      // <Item2 />,
      // <Item1 />,
      // <Item2 />,
      // <Item1 />,
      // <Item2 />,
      // <Item1 />,
      // <Item2 />,
      // <Item1 />,
      // <Item2 />,
   ];

   const prev = (newIndex) => {
      if (mutex === 1) return;
      setMutex(1);

      if (newIndex == -1) {
         carouselRef.current.scrollLeft =
            (carouselItems.length - 1) * carouselRef.current.offsetWidth;
         setMutex(0);
         setIndex(carouselItems.length - 1);
         return;
      }

      const target = newIndex * carouselRef.current.offsetWidth;
      const frameTime = {
         previous: -1,
         secondsPassed: 0,
      };

      const frame = (time) => {
         // console.log(carouselRef.current.scrollLeft, target);
         if (carouselRef.current.scrollLeft > target)
            window.requestAnimationFrame(frame);
         carouselRef.current.scrollLeft = Math.ceil(
            carouselRef.current.scrollLeft - 4 * frameTime.secondsPassed
         );

         if (carouselRef.current.scrollLeft <= target) {
            carouselRef.current.scrollLeft = target - 1;
            window.cancelAnimationFrame(frame);
            setMutex(0);
            setIndex(newIndex);
         }

         if (frameTime.previous === -1) frameTime.previous = time;
         frameTime.secondsPassed = time - frameTime.previous;
         frameTime.previous = time;
      };

      window.requestAnimationFrame(frame);
   };

   const next = (newIndex) => {
      if (mutex === 1) return;
      setMutex(1);

      if (newIndex >= carouselItems.length) {
         carouselRef.current.scrollLeft = 0;
         setMutex(0);
         setIndex(0);
         return;
      }

      const target = newIndex * carouselRef.current.offsetWidth;
      const frameTime = {
         previous: -1,
         secondsPassed: 0,
      };

      const frame = (time) => {
         // console.log(carouselRef.current.scrollLeft, target);
         if (carouselRef.current.scrollLeft < target)
            window.requestAnimationFrame(frame);
         carouselRef.current.scrollLeft = Math.ceil(
            carouselRef.current.scrollLeft + 4 * frameTime.secondsPassed
         );

         if (carouselRef.current.scrollLeft >= target) {
            carouselRef.current.scrollLeft = target + 1;
            window.cancelAnimationFrame(frame);
            setMutex(0);
            setIndex(newIndex);
         }

         if (frameTime.previous === -1) frameTime.previous = time;
         frameTime.secondsPassed = time - frameTime.previous;
         frameTime.previous = time;
      };

      window.requestAnimationFrame(frame);
   };

   useEffect(() => {
      carouselRef.current.scrollLeft = index * carouselRef.current.offsetWidth;
   }, [carouselRef]);

   useEffect(() => {
      const reset = function () {
         console.log(1);
         next(index + 1);
         // const interval = setInterval(() => {
         //    next(index + 1);
         // }, 200);
         // return clearInterval(interval);
      };
      // reset()

      window.addEventListener('resize', reset);

      return () => {
         window.removeEventListener('resize', reset);
      };
   }, []);

   useEffect(() => {
      const autoMaticScroll = setInterval(() => {
         next(index + 1);
      }, 6000);
      return () => clearInterval(autoMaticScroll);
   }, [index]);

   return (
      <div className="relative">
         <button
            onClick={() => {
               prev(index - 1);
            }}
            className="absolute left-[3%] top-1/2 -translate-y-1/2 rounded-full hover:bg-black hover:bg-opacity-20 z-20"
         >
            <TiChevronLeft className="text-6xl" />
         </button>
         <button
            onClick={() => {
               next(index + 1);
            }}
            className="absolute right-[3%] top-1/2 -translate-y-1/2 rounded-full hover:bg-black hover:bg-opacity-20 z-20"
         >
            <TiChevronRight className="text-6xl" />
         </button>
         <div
            className="w-full space flex h-screenWithoutNavbar max-h-[1000px] overflow-x-hidden"
            ref={carouselRef}
         >
            {carouselItems.map((component, index) => {
               return React.cloneElement(component, { key: index });
            })}
         </div>
         <div className="flex items-center space-x-3 absolute left-1/2 bottom-10 -translate-x-1/2">
            {carouselItems.map((name, currIndex) => {
               return (
                  <button
                     key={currIndex}
                     onClick={() => {
                        if (index < currIndex) next(currIndex);
                        else if (index > currIndex) prev(currIndex);
                     }}
                     className={`h-3 w-3 rounded-full opacity-35 ${
                        currIndex === index ? 'bg-white' : 'bg-black'
                     }`}
                  ></button>
               );
            })}
         </div>
      </div>
   );
};

export default Carousel;
