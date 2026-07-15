import React, { useState , useEffect} from "react";
import PackageCard from "../components/PackageCard";
import PackageForm from "../components/PackageForm";
import TravelLoader from "../components/TravelLoader";
import { deletePackage } from "../services/packageService";
import { useAuth } from "../context/AuthContext";
import { usePackages } from "../context/PackageContext";

function Packages({ onInquiry }) {
    const { isAdmin } = useAuth();

    const {
        packages,
        setPackages,
        loading,
        error,
        refreshPackages,
    } = usePackages();

    const [showForm, setShowForm] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const handleDelete = (id) => {
        deletePackage(id)
            .then(() => {
                setPackages(packages.filter((pkg) => pkg.id !== id));
            })
            .catch((err) => console.error("Error deleting package:", err));
    };

    const handleEdit = (id) => {
        setEditId(id);
        setShowForm(true);
    };

    return (
        <div className="py-16 px-6 bg-gray-50 dark:bg-gray-900 min-h-screen">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <div className="text-center mb-12">

                    <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                        Explore Our Tour Packages
                    </h1>

                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Discover unforgettable journeys carefully curated for every kind of traveller.
                        From peaceful backwaters to breathtaking mountains, your next adventure begins here.
                    </p>

                </div>

                {/* Admin Button */}

                {isAdmin && (
                    <button
                        onClick={() => {
                            setEditId(null);
                            setShowForm(true);
                        }}
                        className="mb-8 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        Add Package
                    </button>
                )}

                {/* Modal */}

                {showForm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">

                        <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md p-6 max-h-[80vh] overflow-y-auto">

                            <PackageForm
                                packageId={editId}
                                onSuccess={() => {
                                    refreshPackages();
                                    setShowForm(false);
                                    setEditId(null);
                                }}
                            />

                            <button
                                onClick={() => {
                                    setShowForm(false);
                                    setEditId(null);
                                }}
                                className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                            >
                                Close
                            </button>

                        </div>

                    </div>
                )}

                {/* Loading */}

                {loading && (
                    <>
                        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
                            Preparing your travel experiences...
                        </p>

                        <TravelLoader />
                    </>
                )}

                {/* Error */}

                {!loading && error && (

                    <div className="text-center py-16">

                        <p className="text-red-500 mb-4">{error}</p>

                        <button
                            onClick={refreshPackages}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        >
                            Try Again
                        </button>

                    </div>

                )}

                {/* Empty */}

                {!loading && !error && packages.length === 0 && (

                    <div className="text-center py-16 text-gray-500 dark:text-gray-400">
                        No packages available right now.
                    </div>

                )}

                {/* Cards */}

                {!loading && !error && packages.length > 0 && (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {packages.map((pkg) => (

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

export default Packages;