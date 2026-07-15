import {
    FaHandshake,
    FaMapMarkedAlt,
    FaRupeeSign,
    FaHeadset,
} from "react-icons/fa";

const features = [
    {
        icon: <FaHandshake size={40} />,
        title: "Trusted Travel Partner",
        description:
            "Plan your vacations with confidence through our reliable travel experts and carefully curated experiences.",
    },
    {
        icon: <FaMapMarkedAlt size={40} />,
        title: "Customized Tour Packages",
        description:
            "Every journey is tailored to your interests, budget, and travel style for unforgettable memories.",
    },
    {
        icon: <FaRupeeSign size={40} />,
        title: "Best Price Guarantee",
        description:
            "Enjoy competitive pricing with complete transparency and no hidden costs.",
    },
    {
        icon: <FaHeadset size={40} />,
        title: "24×7 Customer Support",
        description:
            "Our dedicated team is always available to assist you before, during, and after your trip.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Why Choose Prasthanam Tours?
                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        We believe every journey should be memorable. From personalized
                        itineraries to dedicated support, we make your travel experience
                        seamless from start to finish.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group rounded-2xl bg-gray-50 dark:bg-gray-900 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                            <div className="text-orange-500 mb-5 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}