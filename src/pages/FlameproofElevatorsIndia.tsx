import React, { useEffect } from 'react';

export default function FlameproofElevatorsIndia() {
  useEffect(() => {
    document.title = 'Flameproof Elevators in India | Elevation Engineering';

    const description =
      'Elevation Engineering provides flameproof elevator solutions for refineries, oil & gas, petrochemical, chemical and hazardous industrial environments across India.';

    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }

    meta.content = description;

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href =
      'https://elevationengineering.in/flameproof-elevators-in-india';
  }, []);

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-orange-500 font-semibold uppercase tracking-wider mb-4">
            Elevation Engineering
          </p>

          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
            Flameproof Elevators in India
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Flameproof elevator solutions for refineries, oil & gas,
            petrochemical, chemical and other hazardous industrial
            environments across India.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Flameproof Elevator Solutions for Hazardous Industries
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-6">
  Elevation Engineering provides flameproof elevator solutions for
  refineries, oil & gas facilities, petrochemical plants, chemical
  plants and other hazardous industrial environments across India.
  Our services include the supply, installation, testing,
  commissioning, maintenance and inspection of industrial elevator
  systems based on project-specific requirements.
</p>

          <p className="text-lg text-slate-600 leading-relaxed">
            Our focus is on supporting industrial projects with elevator
            systems and services designed around the operational,
            environmental and safety requirements of each application.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Applications of Flameproof Elevators
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Oil & Gas Refineries
              </h3>
              <p className="text-slate-600">
                Elevator solutions for refinery and petroleum processing
                environments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Petrochemical Plants
              </h3>
              <p className="text-slate-600">
                Industrial elevator services for petrochemical facilities
                and processing plants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Chemical Plants
              </h3>
              <p className="text-slate-600">
                Elevator solutions for demanding chemical manufacturing
                environments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Industrial Facilities
              </h3>
              <p className="text-slate-600">
                Customized elevator services for specialized industrial
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Our Flameproof Elevator Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Supply',
                text: 'Supply of elevator equipment and flameproof-related materials according to project requirements.'
              },
              {
                title: 'Installation',
                text: 'Professional installation services for industrial elevator systems.'
              },
              {
                title: 'Testing & Commissioning',
                text: 'Testing and commissioning support before putting elevator systems into operation.'
              },
              {
                title: 'Maintenance',
                text: 'Planned and preventive maintenance services for industrial elevator systems.'
              },
              {
                title: 'Annual Inspection',
                text: 'Inspection and maintenance support for elevators operating in industrial facilities.'
              },
              {
                title: 'Modernization',
                text: 'Modernization and improvement of existing elevator installations where required.'
              }
            ].map((service) => (
              <div
                key={service.title}
                className="border border-slate-200 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Industrial Elevator Experience
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Elevation Engineering works with industrial facilities where
            elevator reliability, maintenance and safety are important
            operational requirements.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed">
            Our capabilities include supply, installation, commissioning,
            maintenance and inspection services for elevators used in
            specialized industrial environments.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                What is a flameproof elevator?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                A flameproof elevator is an elevator system configured for
                applications where the equipment must be suitable for
                specific hazardous or potentially explosive industrial
                environments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Where are flameproof elevators used?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                They can be used in specialized industrial environments
                including oil and gas, refineries, petrochemical and
                chemical facilities, subject to the requirements of the
                particular installation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Does Elevation Engineering provide maintenance?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Yes. Elevation Engineering provides elevator maintenance,
                inspection and related industrial elevator services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Does Elevation Engineering work with refineries?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Elevation Engineering provides elevator-related services
                for industrial facilities, including refinery environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Flameproof Elevator Solution?
          </h2>

          <p className="text-lg mb-8">
            Contact Elevation Engineering to discuss your industrial
            elevator requirements.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            Contact Elevation Engineering
          </a>
        </div>
      </section>
    </div>
  );
}
