import React, { useState } from 'react';
import QR from '@/assets/images/qr.png';
import QRLogo from '@/assets/images/qrcode.png';
import latput from '@/assets/images/latput.png';
import appleDownload from '@/assets/images/appledownload.png';

const DownloadQr = () => {
   const [showModal, setShowModal] = useState(false);

   return (
      <div className="">
         <button
            onClick={() => {
               setShowModal(true);
            }}
            className="absolute bottom-8 right-8 border border-neutral-400 p-2 rounded-xl z-40 hover:shadow-xl"
         >
            <img src={QRLogo} width={50} height={50} />
         </button>

         <div
            className={`fixed top-0 left-0 h-screen w-screen flex items-center justify-center ${
               !showModal && 'hidden'
            } bg-black bg-opacity-45 z-40`}
         >
            <div
               className={`fixed top-0 left-0 h-screen w-screen bg-opacity-45`}
               onClick={() => {
                  setShowModal(false);
               }}
            ></div>
            <div
               className={`${
                  !showModal && 'hidden'
               } bg-white w-11/12 rounded-xl flex h-[370px]  overflow-hidden max-w-[1000px] z-50`}
            >
               <div className="px-10 py-14 w-8/12">
                  <h1 className="font-semibold text-xl">
                     Finish setting up your Rakshati app account for a smooth
                     journey ahead.
                  </h1>
                  {/* <p className="mt-4">Scan code to Download</p> */}
                  <div className="flex items-center ">
                     <div className=" space-y-4 flex-shrink-0">
                        <img src={QRLogo} alt="" width={160} className="m-2" />
                     </div>
                     <div className="flex flex-col space-y-3 justify-center w-full  items-center">
                        <a href="https://play.google.com/store/apps/details?id=com.rakshati.mobileapp&hl=en&gl=US&pli=1">
                           <img
                              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                              alt="Google Play Logo"
                              className="w-[200px]"
                           />
                        </a>
                        <a href="https://apps.apple.com/in/app/rakshati/id6451204945">
                           <img
                              src={appleDownload}
                              alt="App Store Logo"
                              className="w-[200px]"
                           />
                        </a>
                     </div>
                  </div>
               </div>
               <div
                  className="bg-slate-200
             w-4/12 h-full flex items-center justify-end"
               >
                  <img src={latput} alt="" className="w-56 " />
               </div>
            </div>
         </div>
      </div>
   );
};

export default DownloadQr;
