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

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (packageId) {
            getPackageById(packageId).then(res => setFormData(res.data));
        }
    }, [packageId]);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = "Title is required";
        }

        if (!formData.duration.trim()) {
            newErrors.duration = "Duration is required";
        }

        if (!formData.originalPrice) {
            newErrors.originalPrice = "Original Price is required";
        }

        if (!formData.imageUrl.trim()) {
            newErrors.imageUrl = "Image URL is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        if (packageId) {
            updatePackage(packageId, formData)
                .then(() => onSuccess && onSuccess());
        } else {
            createPackage(formData)
                .then(() => onSuccess && onSuccess());
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {packageId ? "Edit Package" : "Add New Package"}
            </h2>

            {[
                { name: "title", label: "Title" },
                { name: "duration", label: "Duration" },
                { name: "originalPrice", label: "Original Price" },
                { name: "discountedPrice", label: "Discounted Price" },
                { name: "imageUrl", label: "Image URL" },
                { name: "description", label: "Description" }
            ].map(({ name, label }) => (
                <div className="mb-4" key={name}>
                    <label className="block text-gray-700 dark:text-gray-300 mb-1">
                        {label}
                        {["title", "duration", "originalPrice", "imageUrl"].includes(name) && (
                            <span className="text-red-500 ml-1">*</span>
                        )}
                    </label>

                    <input
                        type={name.includes("Price") ? "number" : "text"}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        className={`w-full border rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 ${errors[name]
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                            }`}
                    />

                    {errors[name] && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors[name]}
                        </p>
                    )}
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
