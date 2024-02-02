import VendingMachine from './components/VendingMachine';
import Chips from './components/Chips';
import Cookies from './components/Cookies';
import Soda from './components/Soda';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div id="vending-machine-app">
      <Router>
        <h1><Link to="/vending-machine">Vending Machine!</Link></h1>
        <Routes>
          <Route path="/vending-machine" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/soda" element={<Soda />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;
