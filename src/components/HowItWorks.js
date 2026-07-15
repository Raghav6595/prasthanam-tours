import {
  FaClipboardList,
  FaPhoneAlt,
  FaSuitcaseRolling,
  FaPlaneDeparture,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardList size={36} />,
    title: "Send an Enquiry",
    description:
      "Tell us your dream destination, travel dates, and preferences.",
  },
  {
    icon: <FaPhoneAlt size={36} />,
    title: "Consult Our Expert",
    description:
      "Our travel specialists will guide you with the best options.",
  },
  {
    icon: <FaSuitcaseRolling size={36} />,
    title: "Customize Your Trip",
    description:
      "We create a personalized itinerary that fits your budget.",
  },
  {
    icon: <FaPlaneDeparture size={36} />,
    title: "Enjoy Your Journey",
    description:
      "Pack your bags while we take care of everything else.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            How It Works
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Planning your perfect vacation is easy. Follow these four simple
            steps and let us handle the rest.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center"
            >
              <div className="mx-auto w-20 h-20 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                {step.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[70%] w-[60%] h-0.5 bg-orange-300"></div>
              )}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}