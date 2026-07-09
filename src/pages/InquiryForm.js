import React, { useState } from "react";

function InquiryForm({ pkg, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        packageTitle: pkg ? pkg.title : ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
            newErrors.email = "Valid email is required";
        if (!formData.phone.match(/^\d{10}$/))
            newErrors.phone = "Valid 10-digit phone number is required";
        return newErrors;
    };
    //using whatsapp
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // ✅ WhatsApp redirect (replace with your admin number in international format)
        const adminNumber = "9425333190"; // Example: +91 India number
        const whatsappMessage = `New inquiry!
    Name: ${formData.name}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Package: ${formData.packageTitle}
    Message: ${formData.message}`;

        window.open(
            `https://wa.me/${adminNumber}?text=${encodeURIComponent(whatsappMessage)}`,
            "_blank"
        );

        // Optionally also send to backend
        console.log("Inquiry submitted:", formData);

        onClose();
    };


    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Inquiry Form
            </h2>
            <form onSubmit={handleSubmit}>
                {["name", "email", "phone", "message"].map(field => (
                    <div className="mb-4" key={field}>
                        <label className="block text-gray-700 dark:text-gray-300 mb-1 capitalize">
                            {field}
                        </label>

                        {field === "phone" ? (
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={(e) => {
                                    // Allow only digits, max length 10
                                    const value = e.target.value.replace(/\D/g, "");
                                    if (value.length <= 10) {
                                        setFormData(prev => ({ ...prev, phone: value }));
                                    }
                                }}
                                maxLength={10}
                                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        ) : (
                            <input
                                type={field === "email" ? "email" : "text"}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        )}

                        {errors[field] && (
                            <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                        )}
                    </div>
                ))}

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                    Submit Inquiry
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="ml-3 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
                >
                    Close
                </button>
            </form>
        </div>
    );
}

export default InquiryForm;
