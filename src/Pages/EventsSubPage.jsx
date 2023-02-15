import useFetchEvent from 'Hooks/useFetchEvent';
const EventsSubPage = () => {
  const event = useFetchEvent();
    return <>{event && <div>
        <p>{event.name}</p>
        <img src={event.images[0].url} alt="" width="200px"/>
    </div>}</>;
};

export default EventsSubPage;
