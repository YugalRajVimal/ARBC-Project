import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 px-4 md:px-0">
        {/* Customer Support Column */}
        <div>
          <h3 className="font-bold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-xs">
            <li><a href="/" className="hover:text-yellow-500">Help Center</a></li>
            <li><a href="/" className="hover:text-yellow-500">User Guide</a></li>
            <li><a href="/" className="hover:text-yellow-500">Return & Cancellation Policy</a></li>
            <li><a href="/" className="hover:text-yellow-500">Shipping & Delivery Policy</a></li>
          </ul>
        </div>

        {/* About Us Column */}
        <div>
          <h3 className="font-bold mb-4">About Us</h3>
          <ul className="space-y-2 text-xs">
            <li><a href="/" className="hover:text-yellow-500">About Our Company</a></li>
            <li><a href="/" className="hover:text-yellow-500">Success Stories</a></li>
            <li><a href="/" className="hover:text-yellow-500">Jobs & Careers</a></li>
            <li><a href="/" className="hover:text-yellow-500">Contact Us</a></li>
            <li><a href="/" className="hover:text-yellow-500">Make a Payment</a></li>
          </ul>
        </div>

        {/* Our Services Column */}
        <div>
          <h3 className="font-bold mb-4">Our Services</h3>
          <ul className="space-y-2 text-xs">
            <li><a href="/" className="hover:text-yellow-500">Advertise with Us</a></li>
            <li><a href="/" className="hover:text-yellow-500">Book Domains</a></li>
            <li><a href="/" className="hover:text-yellow-500">Trade Khata</a></li>
            <li><a href="/" className="hover:text-yellow-500">Trade Udhaar</a></li>
          </ul>
        </div>

        {/* For Sellers Column */}
        <div>
          <h3 className="font-bold mb-4">For Sellers</h3>
          <ul className="space-y-2 text-xs">
            <li><a href="/" className="hover:text-yellow-500">Display New Products</a></li>
            <li><a href="/" className="hover:text-yellow-500">Buy Trade Leads</a></li>
            <li><a href="/" className="hover:text-yellow-500">Subscribe Buy Trade Alerts</a></li>
          </ul>
        </div>

        {/* For Buyers Column */}
        <div>
          <h3 className="font-bold mb-4">For Buyers</h3>
          <ul className="space-y-2 text-xs">
            <li><a href="/" className="hover:text-yellow-500">Post Your Requirement</a></li>
            <li><a href="/" className="hover:text-yellow-500">Browse Suppliers</a></li>
            <li><a href="/" className="hover:text-yellow-500">Subscribe Sell Trade Alerts</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Directory</h3>
          <ul className="space-y-2 text-xs">
            <li><a href="/" className="hover:text-yellow-500">Manufacturers</a></li>
            <li><a href="/" className="hover:text-yellow-500">Business Services</a></li>
            <li><a href="/" className="hover:text-yellow-500">Service Providers</a></li>
            <li><a href="/" className="hover:text-yellow-500">Industry Hubs</a></li>
            <li><a href="/" className="hover:text-yellow-500">Country Supliers</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto text-center md:text-left flex flex-col md:flex-row justify-between">
          <div>
            <span className="text-sm">&copy; 1999-2024 Your Company Name. All rights reserved.</span>
          </div>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="/" className="hover:text-yellow-500">Privacy Policy</a>
            <a href="/" className="hover:text-yellow-500">Terms & Conditions</a>
          </div>
        </div>
        {/* Countries List */}
        <div className="text-center text-gray-400 mt-4">
          Japan | China | Taiwan | Thailand | Malaysia | Indonesia | UAE | Saudi Arabia | USA | Iran | <a href="/" className="text-yellow-500 hover:underline">More</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
