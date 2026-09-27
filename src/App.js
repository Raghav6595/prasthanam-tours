import  { lazy ,Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InquiryForm from "./pages/InquiryForm";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";
import { PackageProvider } from "./context/PackageContext";


const Packages = lazy(() => import('./pages/Packages'));
const PackageDetail = lazy(() => import('./pages/PackageDetail'));


function App() {
  const [showInquiry, setShowInquiry] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  const handleInquiry = (pkg) => {
    setSelectedPkg(pkg || null);
    setShowInquiry(true);
  };



  return (
    <AuthProvider>
      <ThemeProvider>
        <PackageProvider>
          <Router>
            <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
              <Navbar onInquiry={() => handleInquiry(null)} />

              <main className="flex-grow">
                <Suspense
                  fallback={
                    <div className="min-h-[60vh] flex items-center justify-center">
                      <div className="text-lg font-medium">
                        Loading...
                      </div>
                    </div>
                  }
                >
                  <Routes>
                    <Route
                      path="/"
                      element={<Home onInquiry={() => handleInquiry(selectedPkg)} />}
                    />
                    <Route
                      path="/packages"
                      element={<Packages onInquiry={handleInquiry} />}
                    />
                    <Route path="/package/:id" element={<PackageDetail />} />
                  </Routes>
                </Suspense>
              </main>

              <Footer />

              {/* Inquiry Modal */}
              {showInquiry && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <InquiryForm
                    pkg={selectedPkg}
                    onClose={() => setShowInquiry(false)}
                  />
                </div>
              )}
            </div>
          </Router>
        </PackageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}


export default App;
