import { motion } from 'motion/react';
import { ArrowRight, Heart, Users, Globe, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/church-hero/1920/1080"
            alt="Church Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6">
              Welcome to JCMI
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Spreading Faith, <br />
              <span className="italic font-light">Building Community.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-100 mb-10 leading-relaxed max-w-2xl">
              Join us in our mission to share the transformative love of Jesus Christ through service, worship, and missionary work across the globe.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/about"
                className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition-all flex items-center justify-center group"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6">Our Core Pillars</h2>
            <p className="text-stone-500 leading-relaxed">
              At JCMI, we are committed to these fundamental values that guide our actions and strengthen our faith.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Compassionate Service',
                description: 'We believe in serving our neighbors with love and kindness, following the example of Jesus Christ.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Inclusive Community',
                description: 'A place where everyone is welcome, regardless of their background or journey in faith.',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Global Missions',
                description: 'Spreading the gospel beyond our borders through dedicated missionary work and support.',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-3xl bg-stone-50 hover:bg-stone-100 transition-colors group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-stone-900 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6">Join Our Gatherings</h2>
              <p className="text-stone-500 leading-relaxed">
                Experience the warmth of our community through our weekly services and special events.
              </p>
            </div>
            <Link to="/contact" className="mt-8 md:mt-0 text-stone-900 font-bold flex items-center hover:underline">
              View All Events <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Sunday Worship Service',
                time: 'Every Sunday at 10:00 AM',
                location: 'Main Sanctuary',
                image: 'https://picsum.photos/seed/worship/800/600',
              },
              {
                title: 'Community Outreach Program',
                time: 'Saturdays at 9:00 AM',
                location: 'Community Center',
                image: 'https://picsum.photos/seed/outreach/800/600',
              },
            ].map((event, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col sm:flex-row"
              >
                <div className="sm:w-1/2 h-64 sm:h-auto">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="sm:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center text-stone-400 text-xs font-bold uppercase tracking-widest mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    Upcoming Event
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">{event.title}</h3>
                  <p className="text-stone-500 text-sm mb-2">{event.time}</p>
                  <p className="text-stone-500 text-sm mb-6">{event.location}</p>
                  <button className="text-stone-900 font-bold text-sm flex items-center hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">Ready to take the next step?</h2>
          <p className="text-stone-400 text-lg mb-12 leading-relaxed">
            Whether you're looking for a spiritual home or want to contribute to our missionary efforts, we'd love to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-stone-900 px-10 py-4 rounded-full font-bold hover:bg-stone-100 transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
