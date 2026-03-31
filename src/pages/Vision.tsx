import { motion } from 'motion/react';
import { Eye, Target, Compass } from 'lucide-react';

export default function Vision() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="text-stone-500 font-bold uppercase tracking-widest text-xs mb-4 block">Looking Forward</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">
            Our Vision
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            We envision a world where the love of Christ is known by all, and where every individual has the opportunity to experience spiritual growth and community support.
          </p>
        </motion.div>

        <div className="relative mb-24">
          <div className="rounded-[3rem] overflow-hidden h-[500px]">
            <img
              src="https://picsum.photos/seed/vision/1600/900"
              alt="Vision"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
            <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center border border-stone-100">
              <Eye className="w-12 h-12 text-stone-900 mx-auto mb-6" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-6 italic">
                "To be a global catalyst for spiritual transformation and social restoration through the power of the Gospel."
              </h2>
              <p className="text-stone-500 leading-relaxed">
                Our vision is not just a statement, but a destination we strive towards every day. We seek to build a future where faith is active, hope is contagious, and love is the standard.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 rounded-3xl bg-stone-50 border border-stone-100">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3" />
              Spiritual Growth
            </h3>
            <p className="text-stone-600 leading-relaxed">
              We aim to foster an environment where believers can deepen their relationship with God through discipleship, prayer, and biblical teaching.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-stone-50 border border-stone-100">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6 flex items-center">
              <Compass className="w-6 h-6 mr-3" />
              Social Restoration
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Beyond the walls of the church, we envision restored families, empowered youth, and communities thriving through our outreach and support initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
