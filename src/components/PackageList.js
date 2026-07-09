import React, { useEffect, useState } from "react";
import { getPackages, deletePackage } from "../services/packageService";

function PackageList() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getPackages().then(res => setPackages(res.data));
  }, []);

  const handleDelete = (id) => {
    deletePackage(id).then(() => {
      setPackages(packages.filter(pkg => pkg.id !== id));
    });
  };

  return (
    <div>
      <h2>Available Packages</h2>
      <ul>
        {packages.map(pkg => (
          <li key={pkg.id}>
            {pkg.title} - ₹{pkg.price}
            <button onClick={() => handleDelete(pkg.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackageList;
