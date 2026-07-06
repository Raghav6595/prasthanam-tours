import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-center py-4 mt-6 shadow-inner">
      <p className="text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Prasthanam Tours. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
