
import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';

const DashboardLayout = () => {
    return (
        <div className="dashboard-container ">
            {/* <Sidebar /> */}
            <div className="dashboard-content p-0 ">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
