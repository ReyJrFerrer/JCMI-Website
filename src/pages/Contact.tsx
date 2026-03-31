import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-stone-500 font-bold uppercase tracking-widest text-xs mb-4 block">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">
            We'd Love to <br />
            <span className="italic font-light">Hear From You.</span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            Have questions about our services, missions, or how to get involved? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Visit Us</h3>
                  <p className="text-stone-500 leading-relaxed">
                    123 Faith Avenue, Grace City, <br />
                    GC 54321, United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Call Us</h3>
                  <p className="text-stone-500 leading-relaxed">
                    Main Office: +1 (555) 123-4567 <br />
                    Prayer Line: +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Email Us</h3>
                  <p className="text-stone-500 leading-relaxed">
                    General: contact@jcmi.org <br />
                    Missions: missions@jcmi.org
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 rounded-3xl overflow-hidden h-64 grayscale opacity-70">
              <img
                src="https://picsum.photos/seed/map/800/400"
                alt="Map Placeholder"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="bg-stone-50 rounded-[2.5rem] p-8 md:p-12">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-500 transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-stone-800 transition-all flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-50 text-green-700 rounded-xl text-center text-sm font-medium"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
