import React, { useState, useEffect } from "react";
import { createPackage, updatePackage, getPackageById } from "../services/packageService";

function PackageForm({ packageId, onSuccess }) {
    const [formData, setFormData] = useState({
        title: "",
        duration: "",
        originalPrice: "",
        discountedPrice: "",
        imageUrl: "",
        description: ""
    });

    useEffect(() => {
        if (packageId) {
            getPackageById(packageId).then(res => setFormData(res.data));
        }
    }, [packageId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (packageId) {
            updatePackage(packageId, formData).then(() => onSuccess && onSuccess());
        } else {
            createPackage(formData).then(() => onSuccess && onSuccess());
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {packageId ? "Edit Package" : "Add New Package"}
            </h2>

            {["title", "duration", "originalPrice", "discountedPrice", "imageUrl", "description"].map(field => (
                <div className="mb-4" key={field}>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1 capitalize">{field}</label>
                    <input
                        type={field.includes("Price") ? "number" : "text"}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            ))}

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
            >
                {packageId ? "Update Package" : "Add Package"}
            </button>
        </form>
    );
}

export default PackageForm;
