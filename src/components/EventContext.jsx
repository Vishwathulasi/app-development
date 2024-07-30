import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [eventType, setEventType] = useState('');

  return (
    <EventContext.Provider value={{ eventType, setEventType }}>
      {children}
    </EventContext.Provider>
  );
};
