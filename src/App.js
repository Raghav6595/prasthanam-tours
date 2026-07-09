import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PackageDetail from "./pages/PackageDetail";
import InquiryForm from "./pages/InquiryForm";
import { ThemeProvider } from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [showInquiry, setShowInquiry] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  const handleInquiry = (pkg) => {
    setSelectedPkg(pkg || null);
    setShowInquiry(true);
  };

 

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
          <Navbar onInquiry={() => handleInquiry(null)}  isAdmin={true}/>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home onInquiry={() => handleInquiry(selectedPkg)} />} />
              <Route path="/package/:id" element={<PackageDetail />} />
            </Routes>
          </main>
          <Footer />

          {/* Inquiry Modal */}
          {showInquiry && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <InquiryForm pkg={selectedPkg} onClose={() => setShowInquiry(false)} />
            </div>
          )}

         
        </div>
      </Router>
    </ThemeProvider>
  );
}


export default App;
