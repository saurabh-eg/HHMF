'use client';

export default function OrganizationStats() {
  const stats = [
    { value: '50,000+', description: 'Meals Served Annually' },
    { value: '1,200+', description: 'Health Checks Completed' },
    { value: '500+', description: 'Children Supported' },
    { value: '100+', description: 'Active Volunteers' },
    { value: 'Yamunanagar', description: 'Our Primary Focus' },
  ];

  return (
    <section className="component container container--bleed theme-light" id="stats-section" style={{ padding: '60px 0', borderTop: '1px solid #eee' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2rem', color: '#333' }}>Our Growing Impact</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '30px' }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center', flex: '1 1 200px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#F54713' }}>{stat.value}</div>
              <div style={{ fontSize: '1.1rem', color: '#666', marginTop: '10px' }}>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
