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
            <footer className="relative w-full bottom-0 mt-5 text-center sm:text-left lg:text-left text-gray-700 dark:text-gray-50">
                <div className="flex justify-center items-center sm:justify-between lg:justify-between p-6 border-b border-gray-700 dark:border-white">
                    <div className="mr-12  sm: block lg:block">
                        <span className=" text-sm sm:text-lg text-gray-700 font-bold dark:text-gray-50">Hashtable</span>
                    </div>
                    <div className="flex justify-center items-center text-[8px] sm:text-xs">
                        {
                            // Space for links
                            // <span className="mr-6 ">First Link</span>
                        }
                    </div>
                </div>
                <div className="flex justify-center items-center sm:justify-between lg:justify-between p-6 ">
                    <div className="mr-12 text-sm text-gray-700 sm:block lg:block dark:text-gray-50">
                        <span>© 2023 Copyright: Hashtable</span>
                    </div>
                    <div className="flex justify-center gap-3 dark:text-gray-50">
                        {
                            // Space for icons
                        }
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
