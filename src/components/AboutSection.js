import {
  FaGlobeAsia,
  FaMapMarkedAlt,
  FaHeadset,
  FaSuitcaseRolling,
  FaChevronDown,
} from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">

      {/* Floating Background Icons */}

      <FaGlobeAsia
        className="absolute top-16 left-12 text-6xl text-orange-300/40 dark:text-orange-400/20 float-slow"
      />

      <FaSuitcaseRolling
        className="absolute bottom-20 left-16 text-5xl text-pink-300/40 dark:text-pink-400/20 float-medium"
      />

      <FaMapMarkedAlt
        className="absolute top-24 right-16 text-6xl text-yellow-300/40 dark:text-yellow-400/20 float-fast"
      />

      <FaHeadset
        className="absolute bottom-20 right-14 text-5xl text-orange-300/40 dark:text-orange-400/20 float-slow"
      />

      {/* Hero Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Logo */}

        <img
          src="/p1.png"
          alt="Prasthanam Tours"
          className="mx-auto w-48 md:w-56 mb-8"
        />

        {/* Heading */}

        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
          Go with the Flow
        </h1>

        {/* Subtitle */}

        <p className="mt-8 text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          From majestic mountains to tropical beaches, discover
          handpicked travel experiences designed to create memories
          that last a lifetime.
        </p>

        {/* Feature Cards */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {/* Card 1 */}

          <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-pink-200 via-orange-200 to-yellow-200 hover:from-pink-400 hover:via-orange-400 hover:to-yellow-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="h-full rounded-2xl bg-white dark:bg-gray-800 p-7">

              <FaGlobeAsia className="text-3xl text-orange-500 mx-auto mb-5" />

              <h3 className="font-bold text-2xl dark:text-white">
                Domestic & International
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-8">
                Explore India's hidden gems and breathtaking international destinations.
              </p>

            </div>

          </div>

          {/* Card 2 */}

          <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-pink-200 via-orange-200 to-yellow-200 hover:from-pink-400 hover:via-orange-400 hover:to-yellow-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="h-full rounded-2xl bg-white dark:bg-gray-800 p-7">

              <FaSuitcaseRolling className="text-3xl text-orange-500 mx-auto mb-5" />

              <h3 className="font-bold text-2xl dark:text-white">
                Hassle-Free Travel
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-8">
                From planning to your return journey, we handle every detail so you can simply enjoy the experience.
              </p>

            </div>

          </div>

          {/* Card 3 */}

          <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-pink-200 via-orange-200 to-yellow-200 hover:from-pink-400 hover:via-orange-400 hover:to-yellow-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="h-full rounded-2xl bg-white dark:bg-gray-800 p-7">

              <FaMapMarkedAlt className="text-3xl text-orange-500 mx-auto mb-5" />

              <h3 className="font-bold text-2xl dark:text-white">
               Memorable Experiences
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-8">
                Create lifelong memories with thoughtfully designed trips filled with unique destinations and authentic moments.
              </p>

            </div>

          </div>

          {/* Card 4 */}

          <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-pink-200 via-orange-200 to-yellow-200 hover:from-pink-400 hover:via-orange-400 hover:to-yellow-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="h-full rounded-2xl bg-white dark:bg-gray-800 p-7">

              <FaHeadset className="text-3xl text-orange-500 mx-auto mb-5" />

              <h3 className="font-bold text-2xl dark:text-white">
                Easy Booking
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-8">
                Simple inquiries, transparent pricing, and quick confirmations make planning your next adventure effortless.
              </p>

            </div>

          </div>

        </div>

        {/* Quote */}

        <div className="mt-16">

          <p className="italic text-2xl text-gray-600 dark:text-gray-300">
            "Travel is the only thing you buy that makes you richer."
          </p>

        </div>

        {/* Scroll */}

        <div className="mt-12 flex flex-col items-center">

          <span className="text-gray-500 dark:text-gray-400">
            Scroll to Explore
          </span>

          <FaChevronDown className="mt-2 text-orange-500 text-2xl animate-bounce" />

        </div>

      </div>

    </section>
  );
}