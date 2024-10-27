import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/Dashboard';
import RentalTools from './pages/RentalTools';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Settings from './pages/Settings';
import SpareParts from './pages/SpareParts';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="rental-tools" element={<RentalTools />} />
                    <Route path="spare-parts" element={<SpareParts />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
