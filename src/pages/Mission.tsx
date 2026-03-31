import { motion } from 'motion/react';
import { Send, Shield, Zap, HeartHandshake } from 'lucide-react';

export default function Mission() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-stone-500 font-bold uppercase tracking-widest text-xs mb-4 block">Our Purpose</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">
            Our Mission
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            The mission of JCMI is to fulfill the Great Commission by preaching the gospel, making disciples, and demonstrating Christ's love through practical service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            {
              icon: <Send className="w-6 h-6" />,
              title: 'Evangelism',
              text: 'Actively sharing the message of salvation with those who have not yet heard it, both locally and internationally.',
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: 'Discipleship',
              text: 'Equipping believers to grow in their faith and become effective leaders in their homes and communities.',
            },
            {
              icon: <HeartHandshake className="w-6 h-6" />,
              title: 'Humanitarian Aid',
              text: 'Providing essential resources and support to those in need, reflecting the compassion of Christ.',
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: 'Church Planting',
              text: 'Establishing new faith communities to provide spiritual homes for believers around the world.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-stone-900 text-white rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative rounded-[3rem] overflow-hidden h-[400px] flex items-center justify-center text-center p-8">
          <img
            src="https://picsum.photos/seed/mission-action/1600/600"
            alt="Mission in Action"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/60"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">"Go into all the world and preach the gospel to all creation."</h2>
            <p className="text-stone-300 font-medium uppercase tracking-widest text-sm">— Mark 16:15</p>
          </div>
        </div>
      </div>
    </div>
  );
}
