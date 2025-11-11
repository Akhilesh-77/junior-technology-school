
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import type { Event } from '../types';
import Modal from '../components/Modal';

const EventForm: React.FC<{ event?: Event | null, onSave: (event: Omit<Event, 'id'> | Event) => void, onCancel: () => void }> = ({ event, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        title: event?.title || '',
        date: event?.date || '',
        description: event?.description || '',
        imageUrl: event?.imageUrl || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(event ? { ...event, ...formData } : formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label>Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full p-2 border rounded"/>
            </div>
            <div>
                <label>Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full p-2 border rounded"/>
            </div>
            <div>
                <label>Image URL</label>
                <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required className="w-full p-2 border rounded" placeholder="https://picsum.photos/seed/event/400/300"/>
            </div>
            <div>
                <label>Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required rows={4} className="w-full p-2 border rounded"></textarea>
            </div>
            <div className="flex justify-end space-x-2">
                <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-school-blue text-white rounded">{event ? 'Update' : 'Create'}</button>
            </div>
        </form>
    );
};


const AdminDashboardPage: React.FC = () => {
    const { events, addEvent, updateEvent, deleteEvent, logout } = useAppContext();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingEvent, setEditingEvent] = useState<Event | null>(null);

    const handleLogout = () => {
        logout();
        navigate('/admin');
    };
    
    const openAddModal = () => {
        setEditingEvent(null);
        setIsModalOpen(true);
    };

    const openEditModal = (event: Event) => {
        setEditingEvent(event);
        setIsModalOpen(true);
    };

    const handleSaveEvent = (eventData: Omit<Event, 'id'> | Event) => {
        if ('id' in eventData) {
            updateEvent(eventData);
        } else {
            addEvent(eventData);
        }
        setIsModalOpen(false);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-school-blue">Admin Dashboard</h1>
                    <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Logout</button>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">Manage Events</h2>
                    <button onClick={openAddModal} className="px-4 py-2 bg-school-blue text-white rounded hover:bg-opacity-90">
                        Add New Event
                    </button>
                </div>

                <div className="bg-white shadow rounded-lg overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {events.map(event => (
                                <tr key={event.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{event.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                        <button onClick={() => openEditModal(event)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                        <button onClick={() => deleteEvent(event.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingEvent ? 'Edit Event' : 'Add New Event'}>
                <EventForm 
                    event={editingEvent}
                    onSave={handleSaveEvent}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default AdminDashboardPage;
