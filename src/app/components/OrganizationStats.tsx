'use client';

import Image from 'next/image';

export default function OrganizationStats() {
  const stats = [
    { value: '50,000+', description: 'Meals Served Annually' },
    { value: '1,200+', description: 'Health Checks Completed' },
    { value: '500+', description: 'Children Supported' },
    { value: '100+', description: 'Active Volunteers' },
  ];

  return (
    <section className="relative py-16 md:py-24" id="stats-section">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/impact-bg.png"
          alt="Volunteers serving food"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" /> {/* Solid overlay, no gradient */}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-16 tracking-wide">
          Our Growing Impact
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wider">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Location Highlight */}
        <div className="text-center pt-10 border-t border-gray-700/50">
          <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">
            Yamunanagar
          </div>
          <div className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wider">
            Our Primary Focus
          </div>
        </div>
      </div>
    </section>
  );
}
