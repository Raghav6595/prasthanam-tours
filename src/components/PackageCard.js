import React from "react";
import { Link } from "react-router-dom";

function PackageCard({ pkg }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded p-4">
      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">{pkg.title}</h2>
      <p className="text-gray-600 dark:text-gray-300">Duration: {pkg.duration}</p>
      <p className="text-gray-600 dark:text-gray-300">Price: ₹{pkg.price}</p>
      <Link
        to={`/package/${pkg.id}`}
        className="mt-2 inline-block text-blue-600 dark:text-blue-300 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}

export default PackageCard;
