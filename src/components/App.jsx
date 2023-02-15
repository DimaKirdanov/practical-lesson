import { Routes, Route } from 'react-router-dom';
import LayOut from './Layout/LayOut';
import HomePage from 'Pages/HomePage/HomePage';
import EventsPage from 'Pages/EventsPage/EventsPage';
import EventsSubPage from 'Pages/EventsSubPage';
import SearchPage from 'Pages/SearchPage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":id" element={<EventsSubPage />} />
        </Route>
        <Route path="search" element={<SearchPage />}>
          <Route path=":id" element={<EventsSubPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
