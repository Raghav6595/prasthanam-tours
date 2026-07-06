import React from "react";
import { useParams } from "react-router-dom";

function PackageDetail() {
  const { id } = useParams();

  // For now, just show the ID. Later we’ll fetch details from backend.
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Package Details
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mt-2">
        Showing details for package ID: {id}
      </p>
    </div>
  );
}

export default PackageDetail;
