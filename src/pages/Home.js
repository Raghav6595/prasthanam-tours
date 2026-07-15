import React, {  useState } from "react";
import PackageCard from "../components/PackageCard";
import PackageForm from "../components/PackageForm";
import PackageLoader from "../components/PackageLoader";
import { getPackages, deletePackage } from "../services/packageService";
import { useAuth } from "../context/AuthContext";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularDestinations from "../components/PopularDestinations";
import HowItWorks from "../components/HowItWorks";
import { usePackages } from "../context/PackageContext";
import ExplorePackages from "../components/ExplorePackages";
import AboutSection from "../components/AboutSection";

function Home({ onInquiry }) {
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
      <AboutSection />

      <WhyChooseUs />

      <PopularDestinations />

      <HowItWorks />

      <ExplorePackages />
    </div>
  );
}

export default Home;