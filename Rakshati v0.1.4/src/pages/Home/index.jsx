import React from 'react';
import Navbar from '../../components/Navbar';
import Finance from './Finance';
import Carousel from './carousel/Carousel';
import DownloadQr from '../../components/DownloadQr';
import ScrollCard from '../../components/ScrollCard';
import CardsCarousel from './CardsCarousel';

const Home = () => {
   return (
      <div>
         <DownloadQr />
         <Navbar />
         <div className="max-w-6xl mx-auto ">
            <Carousel />
            <Finance />
            <CardsCarousel />
         </div>

      </div>
   );
};

export default Home;
