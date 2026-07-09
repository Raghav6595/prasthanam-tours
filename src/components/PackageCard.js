import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function PackageCard({ pkg, onEdit, onDelete, onInquiry, isAdmin }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition hover:shadow-lg flex flex-col">
      {/* Image */}
      <img
        src={pkg.imageUrl}
        alt={pkg.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title + Admin Icons */}
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {pkg.title}
          </h3>
          {isAdmin && (
            <div className="flex space-x-3">
              <button
                onClick={() => onEdit(pkg.id)}
                className="text-blue-600 hover:text-blue-800"
                title="Edit Package"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => onDelete(pkg.id)}
                className="text-red-600 hover:text-red-800"
                title="Delete Package"
              >
                <FaTrash />
              </button>
            </div>
          )}
        </div>

        {/* Duration */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {pkg.duration}
        </p>

        {/* Description */}
        {pkg.description && (
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
            {pkg.description}
          </p>
        )}

        {/* Pricing */}
        <div className="flex items-baseline space-x-2 mb-3">
          <span className="text-sm text-gray-500 line-through">
            USD {pkg.originalPrice}
          </span>
          <span className="text-base font-semibold text-blue-600 dark:text-blue-400">
            USD {pkg.discountedPrice} / Adult
          </span>
        </div>

        {/* Bottom‑aligned Request Callback */}
        <div className="mt-auto flex justify-start">
          <button
            onClick={() => onInquiry(pkg)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
          >
            Request Callback
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
