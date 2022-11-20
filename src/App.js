// React packages
import { Routes, Route } from 'react-router-dom';

// Pages
import { Home, Alphabet, Clusters } from './pages';

// Components
import { Navbar } from './components';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/alphabet' element={<Alphabet />}></Route>
        <Route path='/clusters' element={<Clusters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
