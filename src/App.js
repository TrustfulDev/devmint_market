// React packages
import { Routes, Route } from 'react-router-dom';

// Pages
import { Home, Clusters, Tones, Vocab } from './pages';

// Components
import { Navbar } from './components';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/clusters' element={<Clusters />}></Route>
        <Route path='/tones' element={<Tones />}></Route>
        <Route path='/vocab' element={<Vocab />}></Route>
      </Routes>
    </div>
  );
}

export default App;
