import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Account from '../components/Account/Account';
import Signup from '../components/Account/Signup';
import Dashboard from '../components/Dashboard/Dashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
