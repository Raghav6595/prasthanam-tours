import React, { useEffect, useState } from "react";
import PackageCard from "../components/PackageCard";
import PackageForm from "../components/PackageForm";
import PackageLoader from "../components/PackageLoader";
import { getPackages, deletePackage } from "../services/packageService";
import { useAuth } from "../context/AuthContext";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularDestinations from "../components/PopularDestinations";
import HowItWorks from "../components/HowItWorks";

function Home({ onInquiry }) {
  const { isAdmin } = useAuth();

  const [packages, setPackages] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    setLoading(true);
    setError(null);
    getPackages()
      .then(res => setPackages(res.data))
      .catch(err => {
        console.error("Error fetching packages:", err);
        setError("We couldn't load packages right now. Please try again in a moment.");
      })
      .finally(() => setLoading(false));
  }, [refresh]);

  const handleDelete = (id) => {
    deletePackage(id)
      .then(() => {
        setPackages(packages.filter(pkg => pkg.id !== id));
      })
      .catch(err => console.error("Error deleting package:", err));
  };

  const handleEdit = (id) => {
    setEditId(id);
    setShowForm(true);
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="w-full min-h-[50vh] flex flex-col items-center justify-center text-center dark:bg-gray-900">
        <img src="/p1.png" alt="Prasthanam Tours" className="mx-auto mb-6 max-h-40" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
          Go with the Flow
        </h1>
        <p className="mt-4 text-lg dark:text-gray-400 max-w-2xl mx-auto">
          Explore curated adventures across world with Prasthanam Tours.
          Handpicked packages, seamless booking, and unforgettable experiences.
        </p>
      </div>
      
      <WhyChooseUs />

      <PopularDestinations />

      <HowItWorks />
      <div className="p-6">
        {/* Admin-only Add Button */}
        {isAdmin && (
          <button
            onClick={() => {
              setEditId(null);
              setShowForm(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
          >
            Add Package
          </button>
        )}

        {/* Modal for PackageForm */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto p-6">
              <PackageForm
                packageId={editId}
                onSuccess={() => {
                  setRefresh(!refresh);
                  setShowForm(false);
                  setEditId(null);
                }}
              />
              <button
                onClick={() => { setShowForm(false); setEditId(null); }}
                className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && <PackageLoader />}

        {/* Error State */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => setRefresh(!refresh)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && packages.length === 0 && (
          <div className="flex items-center justify-center py-16 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              No packages available right now. Please check back soon!
            </p>
          </div>
        )}

        {/* Package Grid */}
        {!loading && !error && packages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {packages.map(pkg => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onInquiry={onInquiry}
                isAdmin={isAdmin}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;