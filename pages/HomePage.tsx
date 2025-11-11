
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Hero = () => (
    <div className="bg-school-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Welcome to Junior Technology School
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-school-light-blue">
                Inspiring Young Innovators
            </p>
            <div className="mt-8 flex justify-center space-x-4">
                <Link to="/contact" className="bg-school-accent text-school-blue font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-transform transform hover:scale-105">
                    Apply Now
                </Link>
                <Link to="/about" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-school-blue transition-colors">
                    Learn More
                </Link>
            </div>
        </div>
    </div>
);

const QuickLinkCard: React.FC<{title: string; description: string; link: string; icon: React.ReactNode}> = ({title, description, link, icon}) => (
    <Link to={link} className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-school-light-blue text-school-blue mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-school-blue">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </Link>
)

const UpcomingEvents = () => {
    const { events } = useAppContext();
    const upcomingEvents = events.slice(0, 3);

    return (
        <div className="bg-school-light-blue py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-school-blue mb-8">Upcoming Events</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {upcomingEvents.map(event => (
                        <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                           <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
                           <div className="p-6">
                               <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                               <h3 className="text-lg font-semibold text-school-blue mt-2">{event.title}</h3>
                           </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/events" className="text-school-blue font-semibold hover:text-school-accent transition-colors">
                        View All Events &rarr;
                    </Link>
                </div>
            </div>
        </div>
    )
}

const HomePage: React.FC = () => {
  return (
    <div>
        <Hero />
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <QuickLinkCard 
                        title="Our Academics"
                        description="Explore our cutting-edge curriculum and hands-on labs."
                        link="/academics"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg>}
                    />
                    <QuickLinkCard 
                        title="Campus Life"
                        description="Discover our vibrant community and extracurricular activities."
                        link="/gallery"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                    />
                    <QuickLinkCard 
                        title="Get In Touch"
                        description="Have questions? Reach out to our admissions team today."
                        link="/contact"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    />
                </div>
            </div>
        </section>
        <UpcomingEvents />
    </div>
  );
};

export default HomePage;
