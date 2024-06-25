import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[14px] font-semibold text-gray-900 tracking-wider mb-[35px]">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-[15px] text-gray-500">
                  Find A Store
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-gray-500 ">
                  Become A Member
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-gray-500 ">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[14px] font-semibold text-gray-900 tracking-wider mb-[35px]">
              Help
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-[15px] text-gray-500">
                  Get Help
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-gray-500">
                  Order Status
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-gray-500">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-gray-500">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-gray-500">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-gray-500">
                  Contact Us On Nike.com Inquiries
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-gray-500">
                  Contact Us On All Other Inquiries
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[14px] font-semibold text-gray-900 tracking-wider mb-[35px]">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-[15px] text-gray-500 ">
                  About Nike
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-gray-500 ">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-gray-500 ">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-gray-500 ">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-gray-500 ">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-base text-gray-500">
            © 2024 Nike, Inc. All rights reserved
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Guides
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Terms of Sale
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Terms of Use
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Nike Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
