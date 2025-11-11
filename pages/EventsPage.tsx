
import React, { useState, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import type { Event } from '../types';

const PageHeader: React.FC<{title:string}> = ({title}) => (
    <div className="bg-school-light-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-school-blue text-center">{title}</h1>
        </div>
    </div>
);

const EventCard: React.FC<{event: Event}> = ({ event }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
        <div className="overflow-hidden">
             <img src={event.imageUrl} alt={event.title} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm text-gray-500 mb-2">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h3 className="text-xl font-bold text-school-blue">{event.title}</h3>
            <p className="mt-2 text-gray-600 flex-grow">{event.description}</p>
        </div>
    </div>
);

const EventsPage: React.FC = () => {
    const { events } = useAppContext();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredEvents = useMemo(() => {
        return events
            .filter(event => 
                event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }, [events, searchTerm]);

    return (
        <div>
            <PageHeader title="School Events" />
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="mb-8 max-w-lg mx-auto">
                    <input 
                        type="text"
                        placeholder="Search for an event..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-school-blue focus:border-school-blue"
                    />
                </div>

                {filteredEvents.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredEvents.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 mt-12">No events found matching your search.</p>
                )}
            </div>
        </div>
    );
};

export default EventsPage;
