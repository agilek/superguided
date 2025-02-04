import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Barcelona from './pages/Barcelona';
import Amsterdam from './pages/Amsterdam';
import Athens from './pages/Athens';
import Bergen from './pages/Bergen';
import Berlin from './pages/Berlin';
import Bilbao from './pages/Bilbao';
import Bratislava from './pages/Bratislava';
import Brussels from './pages/Brussels';
import Budapest from './pages/Budapest';
import Copenhagen from './pages/Copenhagen';
import Dublin from './pages/Dublin';
import Dubrovnik from './pages/Dubrovnik';
import Edinburgh from './pages/Edinburgh';
import Florence from './pages/Florence';
import Geneva from './pages/Geneva';
import Glasgow from './pages/Glasgow';
import Hamburg from './pages/Hamburg';
import Helsinki from './pages/Helsinki';
import Istanbul from './pages/Istanbul';
import Krakow from './pages/Krakow';
import Lille from './pages/Lille';
import London from './pages/London';
import Madrid from './pages/Madrid';
import Milan from './pages/Milan';
import Munich from './pages/Munich';
import Paris from './pages/Paris';
import Prague from './pages/Prague';
import Reykjavik from './pages/Reykjavik';
import Rome from './pages/Rome';
import Stockholm from './pages/Stockholm';
import Venice from './pages/Venice';
import Vienna from './pages/Vienna';
import Warsaw from './pages/Warsaw';
import Zurich from './pages/Zurich';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/barcelona" element={<Barcelona />} />
      <Route path="/amsterdam" element={<Amsterdam />} />
      <Route path="/athens" element={<Athens />} />
      <Route path="/bergen" element={<Bergen />} />
      <Route path="/berlin" element={<Berlin />} />
      <Route path="/bilbao" element={<Bilbao />} />
      <Route path="/bratislava" element={<Bratislava />} />
      <Route path="/brussels" element={<Brussels />} />
      <Route path="/budapest" element={<Budapest />} />
      <Route path="/copenhagen" element={<Copenhagen />} />
      <Route path="/dublin" element={<Dublin />} />
      <Route path="/dubrovnik" element={<Dubrovnik />} />
      <Route path="/edinburgh" element={<Edinburgh />} />
      <Route path="/florence" element={<Florence />} />
      <Route path="/geneva" element={<Geneva />} />
      <Route path="/glasgow" element={<Glasgow />} />
      <Route path="/hamburg" element={<Hamburg />} />
      <Route path="/helsinki" element={<Helsinki />} />
      <Route path="/istanbul" element={<Istanbul />} />
      <Route path="/krakow" element={<Krakow />} />
      <Route path="/lille" element={<Lille />} />
      <Route path="/london" element={<London />} />
      <Route path="/madrid" element={<Madrid />} />
      <Route path="/milan" element={<Milan />} />
      <Route path="/munich" element={<Munich />} />
      <Route path="/paris" element={<Paris />} />
      <Route path="/prague" element={<Prague />} />
      <Route path="/reykjavik" element={<Reykjavik />} />
      <Route path="/rome" element={<Rome />} />
      <Route path="/stockholm" element={<Stockholm />} />
      <Route path="/venice" element={<Venice />} />
      <Route path="/vienna" element={<Vienna />} />
      <Route path="/warsaw" element={<Warsaw />} />
      <Route path="/zurich" element={<Zurich />} />
    </Routes>
  );
}

export default App;