import React from "react";
import PackageCard from "../components/PackageCard";

const samplePackages = [
  { id: 1, title: "Goa Adventure", price: 12000, duration: "5 Days" },
  { id: 2, title: "Manali Trek", price: 15000, duration: "7 Days" },
];

function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {samplePackages.map(pkg => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
}

export default Home;
