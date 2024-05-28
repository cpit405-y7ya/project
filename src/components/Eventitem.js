import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

function EventItem({event}){
    const [loading, setLoading] = useState(false);

    const handleTweet = async ()=>{
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL}api/tweet?blob_url=${event.blobUrl}`);
        if(response.ok){
            toast.success('tweeted!')
        }else{
            toast.error('Something went wrong!');
        }
        setLoading(false);
    }

    return event && (
        <>
        <div className="event" dir="rtl">
              <p>{event.name}</p>
              <div className="tickets">
                <span>اجمالي التذاكر<br/>{event.ticketsQuantity}</span>
                <span>التذاكر المباعة <br/>{event.soldTickets}</span>
              </div>
              <button type="submit" onClick={handleTweet}>{loading?<img className="eventButtonContent" src="media/bouncing-circles-black.svg" alt="loading"/>:<span className="eventButtonContent">تغريد</span>}</button>
            </div>
        </>
    );
}

export default EventItem;