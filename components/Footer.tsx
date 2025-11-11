
import React from 'react';
import { SCHOOL_INFO } from '../constants';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-school-accent transition-colors">
        {children}
    </a>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-school-accent">Junior Technology School</h3>
            <p className="mt-2 text-gray-400 text-sm">{SCHOOL_INFO.address}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider text-gray-300">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-base text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/academics" className="text-base text-gray-400 hover:text-white">Academics</Link></li>
              <li><Link to="/events" className="text-base text-gray-400 hover:text-white">Events</Link></li>
              <li><Link to="/contact" className="text-base text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-wider text-gray-300">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
                <li>Phone: {SCHOOL_INFO.phone}</li>
                <li>Email: {SCHOOL_INFO.email}</li>
            </ul>
            <div className="mt-6 flex space-x-6">
                <SocialIcon href="#">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </SocialIcon>
                <SocialIcon href="#">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.067.06 1.419.06 3.808s-.012 2.741-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.067.048-1.419.06-3.808.06s-2.741-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427C2.013 14.741 2 14.389 2 12s.013-2.741.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.48 3.638c.636-.247 1.363-.316 2.427-.364C8.94 3.229 9.291 3.217 11.724 3.217h.591zM12 1.5c-2.472 0-2.828.01-3.85.058-1.17.053-2.002.228-2.711.512a6.375 6.375 0 00-2.28 1.482 6.375 6.375 0 00-1.482 2.28c-.284.709-.459 1.541-.512 2.711C1.51 9.172 1.5 9.528 1.5 12s0 2.828.058 3.85c.053 1.17.228 2.002.512 2.711a6.375 6.375 0 001.482 2.28 6.375 6.375 0 002.28 1.482c.709.284 1.541.459 2.711.512C9.172 22.49 9.528 22.5 12 22.5s2.828-.01 3.85-.058c1.17-.053 2.002-.228 2.711-.512a6.375 6.375 0 002.28-1.482 6.375 6.375 0 001.482-2.28c.284-.709.459-1.541.512-2.711C22.49 14.828 22.5 14.472 22.5 12s0-2.828-.058-3.85c-.053-1.17-.228-2.002-.512-2.711a6.375 6.375 0 00-1.482-2.28 6.375 6.375 0 00-2.28-1.482c-.709-.284-1.541-.459-2.711-.512C14.828 1.51 14.472 1.5 12 1.5zm0 4.25a6.25 6.25 0 100 12.5 6.25 6.25 0 000-12.5zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.406 1.406 0 100-2.812 1.406 1.406 0 000 2.812z" clipRule="evenodd" /></svg>
                </SocialIcon>
                <SocialIcon href="#">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-base text-gray-400">
          <p>&copy; {new Date().getFullYear()} Junior Technology School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
