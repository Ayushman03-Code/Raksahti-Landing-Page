import React from 'react';
import Navbar from '../../components/Navbar';
import Finance from './Finance';
import Carousel from './carousel/Carousel';
import DownloadQr from './DownloadQr';

const Home = () => {
   return (
      <div>
         <DownloadQr />
         <Navbar />
         <div className="max-w-6xl mx-auto ">
            <Carousel />
            <Finance />
         </div>
      </div>
   );
};

export default Home;
