import { Route, Routes } from 'react-router-dom';
import Landing from './Views/Landing/Landing';
import About from './Views/About/About';
import Artists from './Views/Artists/Artists';
import Beats from './Views/Beats/Beats';
import Merch from './Views/Merch/Merch';
import Contact from './Views/Contact/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/beats' element={<Beats />} />
        <Route path='/merch' element={<Merch />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
