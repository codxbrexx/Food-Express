import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdDeliveryDining, MdPayment } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const FoodFooter = () => {
  return (
    <footer className="bg-gray-700 border-t border-gray-300 text-blue-500 py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-500">FoodExpress</h3>
            <p className="text-gray-300">
              Delivering delicious meals to your doorstep since 2020. We pride
              ourselves on quality food and fast delivery.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-300 hover:text-blue-500 text-xl" />
              </a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-300 hover:text-blue-500 text-xl" />
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-300 hover:text-blue-500 text-xl" />
              </a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-300 hover:text-blue-500 text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="Home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="Menu"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="About Us"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <MdDeliveryDining className="text-blue-700" />
                Fast Delivery
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MdPayment className="text-blue-700" />
                Secure Payment
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <RiCustomerService2Fill className="text-blue-700" />
                24/7 Support
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Food Street, Foodville</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@foodexpress.com</p>
              <p>Opening Hours: 9:00 AM - 11:00 PM</p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} FoodExpress. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-blue-400 text-sm" aria-label="Privacy Policy">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 text-sm" aria-label="Terms of Service">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 text-sm" aria-label="Refund Policy">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FoodFooter;
