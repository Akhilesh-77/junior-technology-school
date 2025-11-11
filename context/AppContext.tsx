
import React, { createContext, useState, useEffect, useContext } from 'react';
import type { Event } from '../types';
import { MOCK_EVENTS } from '../constants';

interface AppContextType {
  // Auth
  isAuthenticated: boolean;
  login: (pass: string) => boolean;
  logout: () => void;
  
  // Events
  events: Event[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  updateEvent: (event: Event) => void;
  deleteEvent: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Load events from localStorage or use mock data
    try {
      const storedEvents = localStorage.getItem('schoolEvents');
      if (storedEvents) {
        setEvents(JSON.parse(storedEvents));
      } else {
        setEvents(MOCK_EVENTS);
        localStorage.setItem('schoolEvents', JSON.stringify(MOCK_EVENTS));
      }
    } catch (error) {
        console.error("Failed to parse events from localStorage", error);
        setEvents(MOCK_EVENTS);
    }

    // Check auth state
    const storedAuth = sessionStorage.getItem('isAdminAuthenticated');
    setIsAuthenticated(storedAuth === 'true');
  }, []);

  const login = (password: string) => {
    if (password === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAdminAuthenticated');
  };

  const updateLocalStorageEvents = (updatedEvents: Event[]) => {
    setEvents(updatedEvents);
    localStorage.setItem('schoolEvents', JSON.stringify(updatedEvents));
  };

  const addEvent = (eventData: Omit<Event, 'id'>) => {
    const newEvent: Event = {
      ...eventData,
      id: new Date().toISOString(),
    };
    const updatedEvents = [...events, newEvent];
    updateLocalStorageEvents(updatedEvents);
  };

  const updateEvent = (updatedEvent: Event) => {
    const updatedEvents = events.map(event =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    updateLocalStorageEvents(updatedEvents);
  };

  const deleteEvent = (id: string) => {
    if(window.confirm('Are you sure you want to delete this event?')){
        const updatedEvents = events.filter(event => event.id !== id);
        updateLocalStorageEvents(updatedEvents);
    }
  };

  const value = {
    isAuthenticated,
    login,
    logout,
    events,
    addEvent,
    updateEvent,
    deleteEvent,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
