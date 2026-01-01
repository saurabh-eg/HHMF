'use client';

export default function OrganizationStats() {
  const stats = [
    { value: '50,000+', description: 'Meals Served Annually' },
    { value: '1,200+', description: 'Health Checks Completed' },
    { value: '500+', description: 'Children Supported' },
    { value: '100+', description: 'Active Volunteers' },
  ];

  return (
    <section className="bg-white py-16 md:py-20 border-t border-gray-100" id="stats-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          Our Growing Impact
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Location Highlight */}
        <div className="text-center pt-8 border-t border-gray-100">
          <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
            Yamunanagar
          </div>
          <div className="text-sm md:text-base text-gray-600">
            Our Primary Focus
          </div>
        </div>
      </div>
    </section>
  );
}
