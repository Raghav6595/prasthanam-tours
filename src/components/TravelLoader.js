import { useEffect, useState } from "react";

const messages = [
  "🌴 Discovering hidden gems...",
  "🏔️ Mountains are calling...",
  "🌊 Finding beautiful beaches...",
  "🧳 Packing your dream vacation...",
  "📸 Collecting unforgettable memories...",
  "🌍 Almost ready..."
];

export default function TravelLoader() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) =>
        prev === messages.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-24 px-6">

      {/* Plane */}

      <div className="text-7xl animate-bounce">
        ✈️
      </div>

      <h2 className="mt-8 text-4xl font-bold text-gray-900 dark:text-white">
        Preparing your next adventure...
      </h2>

      <p className="mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
        Our travel experts are waking up and fetching the latest tour
        packages for you.
      </p>

      <p className="mt-2 text-center text-gray-500 dark:text-gray-400">
        The first visit may take up to a minute because our free server
        is starting.
      </p>

      {/* Progress */}

      <div className="w-80 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-10">

        <div className="h-full w-1/2 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 animate-pulse rounded-full"></div>

      </div>

      {/* Rotating Text */}

      <p className="mt-8 text-xl font-medium text-orange-500 transition-all duration-700">
        {messages[messageIndex]}
      </p>

    </div>
  );
}