import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

/**
 * Loader shown while packages are being fetched.
 *
 * Our backend is hosted on Render's free tier, which spins the service
 * down after ~15 mins of inactivity. The first request after that can
 * take 30-60s to respond while the instance wakes up. Rather than let
 * the user stare at a blank screen, we show a normal spinner right away,
 * then escalate the message after a few seconds so slow (cold-start)
 * loads get an explanation while fast (warm) loads stay snappy and quiet.
 */
function PackageLoader() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getMessage = () => {
    if (elapsed < 4) return "Loading packages...";
    if (elapsed < 15) return "Please wait while we are loading packages...";
    return "Our server is waking up after a short nap — this can take up to a minute. Thanks for your patience!";
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-16 text-center">
      <FaSpinner className="animate-spin text-4xl text-orange-500 mb-4" />
      <p className="text-gray-600 dark:text-gray-400 max-w-md transition-all duration-300">
        {getMessage()}
      </p>
      {elapsed >= 15 && (
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 max-w-sm">
          Our backend is on a free hosting plan that sleeps when idle. It'll be fast again once it's warmed up!
        </p>
      )}
    </div>
  );
}

export default PackageLoader;