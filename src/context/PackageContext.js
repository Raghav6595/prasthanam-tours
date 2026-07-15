import { createContext, useContext, useEffect, useState ,useCallback } from "react";
import { getPackages } from "../services/packageService";

const PackageContext = createContext();

export function PackageProvider({ children }) {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPackages = useCallback((forceRefresh = false) => {

        if (!forceRefresh && packages.length > 0) {
            return;
        }

        setLoading(true);
        setError(null);

        getPackages()
            .then((res) => setPackages(res.data))
            .catch((err) => {
                console.error(err);
                setError(
                    "We couldn't load packages right now. Please try again in a moment."
                );
            })
            .finally(() => setLoading(false));
    }, [packages.length]);

    // Fetch only once when app starts
    useEffect(() => {
        fetchPackages();
    }, [fetchPackages]);

    return (
        <PackageContext.Provider
            value={{
                packages,
                setPackages,
                loading,
                error,
                fetchPackages,     
                refreshPackages: () => fetchPackages(true),
            }}
        >
            {children}
        </PackageContext.Provider>
    );
}

export function usePackages() {
    return useContext(PackageContext);
}