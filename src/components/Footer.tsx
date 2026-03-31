import { Church, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-stone-800 rounded-lg">
                <Church className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-xl font-bold text-stone-900">JCMI</span>
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Jesus Christ Missionary Incorporated is dedicated to spreading the love and teachings of Jesus Christ through mission work and community service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-stone-500 hover:text-stone-900 text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-stone-500 hover:text-stone-900 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/vision" className="text-stone-500 hover:text-stone-900 text-sm transition-colors">Vision</Link></li>
              <li><Link to="/mission" className="text-stone-500 hover:text-stone-900 text-sm transition-colors">Mission</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-stone-400 flex-shrink-0" />
                <span className="text-stone-500 text-sm">123 Faith Avenue, Grace City, GC 54321</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-stone-400 flex-shrink-0" />
                <span className="text-stone-500 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-stone-400 flex-shrink-0" />
                <span className="text-stone-500 text-sm">contact@jcmi.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider mb-6">Newsletter</h3>
            <p className="text-stone-500 text-sm mb-4">Stay updated with our latest news and events.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white border border-stone-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-500 transition-all"
              />
              <button className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Jesus Christ Missionary Incorporated. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-stone-400 hover:text-stone-900 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-400 hover:text-stone-900 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
