
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
    return (
        <div className="dashboard-container d-flex">
            <Sidebar />
            <div className="dashboard-content">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
