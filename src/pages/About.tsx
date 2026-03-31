import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-stone-500 font-bold uppercase tracking-widest text-xs mb-4 block">Our Story</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">
            About Jesus Christ Missionary Incorporated
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            Founded on the principles of love, faith, and service, JCMI has been a beacon of hope for over three decades. We are more than just a church; we are a family dedicated to making a tangible difference in the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="rounded-3xl overflow-hidden aspect-[4/5]">
            <img
              src="https://picsum.photos/seed/history/800/1000"
              alt="Our History"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-6">Our History</h2>
            <div className="space-y-6 text-stone-600 leading-relaxed">
              <p>
                JCMI began as a small gathering of faithful individuals in a local living room, driven by a shared desire to serve the marginalized and spread the gospel. What started as a humble mission has grown into a global organization with branches in multiple countries.
              </p>
              <p>
                Throughout our journey, we have remained steadfast in our commitment to the Great Commission. Our history is marked by stories of lives transformed, communities rebuilt, and the enduring power of faith in action.
              </p>
              <p>
                Today, JCMI continues to evolve, embracing modern ways to connect and serve while staying true to our foundational biblical values.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-stone-50 rounded-[3rem] p-12 md:p-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="font-serif text-5xl font-bold text-stone-900 mb-2">30+</div>
              <div className="text-stone-500 font-medium">Years of Ministry</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-stone-900 mb-2">15</div>
              <div className="text-stone-500 font-medium">Global Missions</div>
            </div>
            <div>
              <div className="font-serif text-5xl font-bold text-stone-900 mb-2">10k+</div>
              <div className="text-stone-500 font-medium">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
