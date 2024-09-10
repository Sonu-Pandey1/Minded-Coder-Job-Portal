import "./Sidebar.scss"
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar container-fulid ">
            {/* <div className="row">
                <div className="col-2"> */}
                    <div className="row  m-0">
                        <ul>
                            <li className="">
                                <NavLink to="/dashboard" className=" sidebar-item dd  d-flex align-items-center">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="me-3 text-primary ">
                                        <path d="M10 18V8H18V18H10ZM0 10V0H8V10H0ZM6 8V2H2V8H6ZM0 18V12H8V18H0ZM2 16H6V14H2V16ZM12 16H16V10H12V16ZM10 0H18V6H10V0ZM12 2V4H16V2H12Z" fill="currentColor"></path>
                                    </svg>
                                    <span className="menu-item-t  ">Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/messages" className="sidebar-item d-flex align-items-center">
                                    <svg width="22" height="21" viewBox="0 0 22 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="me-3 text-primary">
                                        <path d="M13 20.5L10.2 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16V5.103C4 4.83778 4.10536 4.58343 4.29289 4.39589C4.48043 4.20836 4.73478 4.103 5 4.103H21C21.2652 4.103 21.5196 4.20836 21.7071 4.39589C21.8946 4.58343 22 4.83778 22 5.103V16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17H15.8L13 20.5ZM14.839 15H20V6.103H6V15H11.161L13 17.298L14.839 15ZM1 0H18V2H2V13H0V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0Z" fill="currentColor"></path>
                                    </svg>
                                    <span className="menu-item-t">Messages</span>
                                </NavLink>
                            </li>
                            <li><NavLink to="/dashboard/bookmarks"
                                className="sidebar-item d-flex align-items-center">
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="me-3 text-primary"><path d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z" fill="currentColor"></path></svg>
                                <span className="menu-item-t">Bookmarks </span>
                            </NavLink></li>
                            <li>
                                <NavLink to="/dashboard/applications" className="sidebar-item d-flex align-items-center">
                                    <svg width="18" height="19" viewBox="0 0 21 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="me-3 text-primary"><path d="M17 0C17.552 0 18 0.448 18 1V4.757L16 6.757V2H2V18H16V15.242L18 13.242V19C18 19.552 17.552 20 17 20H1C0.448 20 0 19.552 0 19V1C0 0.448 0.448 0 1 0H17ZM18.778 6.808L20.192 8.222L12.414 16L10.998 15.998L11 14.586L18.778 6.808ZM10 10V12H5V10H10ZM13 6V8H5V6H13Z" fill="currentColor"></path></svg>
                                    <span className="menu-item-t">Applications </span>

                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manage-resumes" className="sidebar-item d-flex align-items-center">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="me-3 text-primary" height="1em" width="1em">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                    <span className="menu-item-t">Resumes </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/add-resumes" className="sidebar-item d-flex align-items-center">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="me-3 text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    <span className="menu-item-t">Add Resumes</span>

                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/my-profile" className="sidebar-item d-flex align-items-center">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="me-3 text-primary">
                                        <path d="M8.99955 15C12.6616 15 15.8646 16.575 17.6066 18.925L15.7646 19.796C14.3466 18.116 11.8466 17 8.99955 17C6.15255 17 3.65255 18.116 2.23455 19.796L0.393555 18.924C2.13555 16.574 5.33755 15 8.99955 15ZM8.99955 0C10.3256 0 11.5974 0.526784 12.5351 1.46447C13.4728 2.40215 13.9996 3.67392 13.9996 5V8C13.9995 9.28846 13.502 10.5272 12.6109 11.4578C11.7198 12.3884 10.5038 12.9391 9.21655 12.995L8.99955 13C7.67347 13 6.4017 12.4732 5.46402 11.5355C4.52634 10.5979 3.99955 9.32608 3.99955 8V5C3.99963 3.71154 4.4971 2.47284 5.38821 1.54222C6.27933 0.611607 7.49531 0.0609194 8.78255 0.00500011L8.99955 0ZM8.99955 2C8.23434 1.99996 7.49804 2.29233 6.94129 2.81728C6.38455 3.34224 6.04945 4.06011 6.00455 4.824L5.99955 5V8C5.9988 8.7809 6.30257 9.53133 6.84633 10.0918C7.39008 10.6523 8.13095 10.9787 8.91152 11.0016C9.69209 11.0245 10.4508 10.7422 11.0265 10.2145C11.6022 9.68691 11.9495 8.9556 11.9946 8.176L11.9996 8V5C11.9996 4.20435 11.6835 3.44129 11.1209 2.87868C10.5583 2.31607 9.7952 2 8.99955 2Z" fill="currentColor"></path>
                                    </svg>
                                    <span className="menu-item-t"> My Profile </span>
                                </NavLink>
                            </li>
                            <NavLink to="/" className="sidebar-item sidebar-item-l d-flex align-items-center">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="me-3 text-primary" height="1em" width="1em">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                </svg>
                                <span className=""> Log Out </span>
                            </NavLink>
                        </ul>
                    </div>
                </div>
        //     </div>

        // </div>
    );
};

export default Sidebar;

