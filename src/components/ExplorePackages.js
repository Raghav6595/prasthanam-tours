import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { usePackages } from "../context/PackageContext";

export default function ExplorePackages() {
    const navigate = useNavigate();
    const { loading } = usePackages();

    return (
        <section className="py-24 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 text-white">

            <div className="max-w-5xl mx-auto px-6 text-center">

                <span className="uppercase tracking-[0.35em] text-white/80 text-sm font-semibold">
                    Ready For Your Next Adventure?
                </span>

                <h2 className="text-5xl font-bold mt-6">
                    Explore Our Handpicked Tour Packages
                </h2>

                <p className="mt-6 text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                    Whether you're dreaming of snowy mountains, tropical beaches,
                    serene backwaters or vibrant international escapes,
                    we have the perfect itinerary waiting for you.
                </p>

                <button
                    onClick={() => navigate("/packages")}
                    className="mt-10 inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition duration-300"
                >
                    {loading
                        ? "Preparing Tours..."
                        : "Explore Tour Packages"}
                    <FaArrowRight />
                </button>

            </div>

        </section>
    );
}