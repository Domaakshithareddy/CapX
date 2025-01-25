import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Account from './components/Account/Account';
import Funds from './components/Funds/Funds';
import Signup from './components/Account/Signup';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
