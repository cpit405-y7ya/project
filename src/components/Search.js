import { useState } from "react";
import { useEvent } from "../context/context";
import toast from "react-hot-toast";

function Search() {
  const { events, setEvents, appendEvent } = useEvent();
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    if (e.key !== "Enter") {
      return;
    }

    setLoading(true);
    const response = await fetch(`${process.env.REACT_APP_API_URL}api/scraper?event=${e.target.value}`);
    if(response.ok){
      const data = await response.json();
      appendEvent(data.match);
      toast.success(`تم عد التذاكر `);
    }else{
      toast.error(`Couldn't find ${e.target.value}!`);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="main">
        <input
          dir="rtl"
          placeholder="الأهلي ضد الفيحاء"
          className="searchInput"
          onKeyDown={handleSearch}
          disabled={loading}
        />
        {loading && (
          <div className="loading">
            <img src="media/bouncing-circles.svg" />
          </div>
        )}
      </div>
    </>
  );
}

export default Search;

