import { useContext, useEffect, useState } from "react";
import EventItem from "./Eventitem";
import {useEvent} from '../context/context'

function Events() {
  const {events, setEvents, appendEvent, loading, setLoading} = useEvent();
  useEffect(()=>{
    (async function (){
        setLoading(true)
        const response = await fetch(`${process.env.REACT_APP_API_URL}api/list`);
        if(response.ok){
          const data = await response.json();
          await generateEventItems(data.slice(0,10))
        }
        setLoading(false);
    })()

    async function generateEventItems(items){
      let eventData = [];
      for (const item of items){  
        const response = await fetch(item);
        const data = await response.json();
        const ids = eventData.map((event)=>event && event.id);
        if(data && ids.indexOf(data.id) === -1){
          data.blobUrl =  item
          eventData.push(data)
        }
      }
      setEvents(eventData)
    }
  },[])

  return (
    <>
      <div className="container">
        <div className="loading">
            
        </div>
        {loading?<div className="loading"><img  src="media/bouncing-circles.svg" /></div>:
        <div className="lastEvents">
          {events.map((event, index) => (
            <EventItem key={index} event={event} />
          ))}
        </div>
        }
      </div>
    </>
  );
}

export default Events;
