import React from "react";
import {
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebookSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="relative top-20 mt-5 text-center lg:text-left bg-sky-100 text-blue-600">
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-blue-300">
          <div className="mr-12  lg:block">
            <span className="text-lg text-blue-900 font-bold">Hashtable</span>
          </div>
          <div className="flex justify-center items-center text-xs">
            <span className="mr-6 ">First Link</span>
            <span className="mr-6">Second Link</span>
            <span className="mr-6">Third Link</span>
            <span>Fourth Link</span>
          </div>
        </div>
        <div className="flex justify-center items-center lg:justify-between p-6 ">
          <div className="mr-12 text-sm text-blue-700 lg:block">
            <span>© 2023 Copyright: Hashtable</span>
          </div>
          <div className="flex justify-center">
            <a href="#!" className="mr-3 text-blue-800">
              <FaFacebookSquare />
            </a>
            <a href="#!" className="mr-3 text-blue-800">
              <FaTwitter />
            </a>
            <a href="#!" className="mr-3 text-blue-800">
              <FaGoogle />
            </a>
            <a href="#!" className="mr-3 text-blue-800">
              <FaInstagram />
            </a>
            <a href="#!" className="mr-3 text-blue-800">
              <FaLinkedin />
            </a>
            <a href="#!" className="text-blue-800">
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
