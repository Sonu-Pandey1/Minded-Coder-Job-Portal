import "./Sidebar.scss"
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar bg-light d-flex flex-column">
            <NavLink to="/dashboard" className="sidebar-item">Dashboard</NavLink>
            <NavLink to="/dashboard/messages" className="sidebar-item">Messages</NavLink>
            <NavLink to="/dashboard/bookmarks" className="sidebar-item">Bookmarks</NavLink>
            <NavLink to="/dashboard/job-alerts" 
            className="sidebar-item">Job Alerts</NavLink>
            <NavLink to="/dashboard/applications" className="sidebar-item">Applications</NavLink>
            <NavLink to="/dashboard/manage-resumes" className="sidebar-item">Manage Resumes</NavLink>
            <NavLink to="/dashboard/add-resumes" className="sidebar-item">Add Resumes</NavLink>
            <NavLink to="/dashboard/my-profile" className="sidebar-item">My Profile</NavLink>
            <NavLink to="/dashboard" className="sidebar-item">Log Out</NavLink>
            
            
        </div>
    );
};

export default Sidebar;

