import React, { createContext, useContext, useState } from "react";

const EventsContext = createContext();
export const useEvent = ()=> useContext(EventsContext);

export default function EventsContextProvider({children}){
  const [events, setEvents] = useState([]);
  const [loading, setLoading]  = useState(false);

  function appendEvent(event){
    setEvents(prevEvents => {
      const ids = prevEvents.map((e)=>e && e.id);
      if(event && ids.indexOf(event.id) === -1){
        return [event,...prevEvents]
        }else{
          prevEvents = prevEvents.filter((item)=>item.id !== event.id);
          return [event,...prevEvents]
        }
      });

  }

  return (
    <EventsContext.Provider value={{events,setEvents,appendEvent,loading,setLoading}}>
      {children}
    </EventsContext.Provider>
  );
}