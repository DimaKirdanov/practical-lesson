import { fetchEventById } from "services/moviesApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useFetchEvent = () => {
    const [event, setEvent] = useState(null);
    const { id } = useParams();

    useEffect(() => {
    fetchEventById(id).then(setEvent)
}, [id])
    console.log(event);
    return event;
    
}
export default useFetchEvent;