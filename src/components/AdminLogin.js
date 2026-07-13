import { useState } from "react";
import { adminLogin } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function AdminLogin({ onClose }) {

    const { login } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {

            const response = await adminLogin(username, password);

            login(response.data.token);

            onClose();

        } catch (err) {

            setError("Invalid username or password");

        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-96">

                <h2 className="text-2xl font-bold mb-5 dark:text-white">
                    Admin Login
                </h2>

                <form onSubmit={handleLogin}>

                    <input
                        className="w-full border rounded px-3 py-2 mb-4 dark:bg-gray-700 dark:text-white"
                        placeholder="Username"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        className="w-full border rounded px-3 py-2 mb-4 dark:bg-gray-700 dark:text-white"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    {error && (
                        <p className="text-red-500 text-sm mb-4">
                            {error}
                        </p>
                    )}

                    <div className="flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded bg-gray-400 text-white"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 rounded bg-blue-600 text-white"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AdminLogin;