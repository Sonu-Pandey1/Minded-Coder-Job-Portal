import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import './Table.scss'; // Your styles

const columnsByRoute = {
    application: [
        { id: 'jobTitle', align: 'left', label: 'Job Title', minWidth: 170 },
        { id: 'coverLetter', align: 'center', label: 'Cover Letter', minWidth: 100 },
        { id: 'cv', label: 'CV', minWidth: 170, align: 'center' },
        { id: 'email', label: 'Email', minWidth: 170, align: 'center' },
        { id: 'status', label: 'Status', minWidth: 170, align: 'center' },
    ],
    resumes: [
        { id: 'name', align: 'left', label: 'Name', minWidth: 170 },
        { id: 'title', align: 'center', label: 'Title', minWidth: 100 },
        { id: 'status', label: 'Status', minWidth: 170, align: 'center' },
        { id: 'categories', label: 'Categories', minWidth: 170, align: 'center' },
        { id: 'datePosted', label: 'Date Posted', minWidth: 170, align: 'center' },
        { id: 'result', label: 'Result', minWidth: 170, align: 'center' },
    ],
    managesJobs: [
        { id: 'img', align: 'left', label: 'Logo', minWidth: 100 },
        { id: 'title', align: 'left', label: 'Title', minWidth: 170 },
        { id: 'datePosted', align: 'center', label: 'Date Posted', minWidth: 100 },
        { id: 'ListingExpires', label: 'Listing Expires', minWidth: 170, align: 'center' },
        { id: 'categories', label: 'Category', minWidth: 170, align: 'center' },
        { id: 'applications', label: 'Applications', minWidth: 170, align: 'center' },
        { id: 'actions', label: 'Actions', minWidth: 170, align: 'center' },
    ],
    managesCompanys: [
        { id: 'img', align: 'left', label: 'Company Name', minWidth: 100 },
        { id: 'statuss', label: 'Status', minWidth: 170, align: 'center' },
        { id: 'datePosted', align: 'center', label: 'Date Posted', minWidth: 100 },
        { id: 'actions', label: 'Actions', minWidth: 170, align: 'center' },
    ],
};

function createDataByRoute(route) {
    if (route === 'application') {
        return [
            {
                jobTitle: 'Application Billing Support Specialist Job',
                coverLetter: <button className="btn btn-sm btn-outline-primary">Read Cover Letter</button>,
                cv: <button className="btn btn-sm btn-outline-primary">View CV</button>,
                email: 'khushi@1234gmail.com',
                status: <span className="badge bg-warning text-dark p-2">Applied</span>,
            },
            // Add more rows if needed
        ];
    } else if (route === 'resumes') {
        return [
            {
                name: ' Resumes rr',
                title: 'web',
                status: <><span className="badge bg-success p-2">Enabled</span><span className="badge bg-success p-2">Approved</span></>,
                categories: 'IT/Telecommunication',
                datePosted: <span className="badge bg-success p-2 ">Sep 5, 2024</span>,
                result: <><span>Show Results</span><div><button className='btn btn-sm btn-outline-primary'>Edit</button><button className='btn btn-sm btn-outline-primary'>Disable</button><button className='btn btn-sm btn-outline-primary'>Delete</button></div></>,
            },
            // Add more rows if needed
        ];
    } else if (route === 'managesJobs') {
        return [
            {
                img: <img src="https://metajobs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Favatar.png&w=128&q=75 " height={"50%"} width={"50%"} alt="Jobs-Logo" />,
                title: <p className='fs-6 fw-bold m-0'>Microsoft</p>,
                categories: <p className=' badge bg-info-subtle text-dark p-2 m-0 '>IT/Telecommunication</p>,
                datePosted: <span className="date-posted-badge ">Sep 5, 2024</span>,
                ListingExpires: <span className="date-posted-badge">Sep 15, 2024</span>,
                applications: "54",
                actions: <><div className=''><button className='btn btn-sm btn-outline-primary '>Edit</button><button className='btn btn-sm btn-outline-warning ms-3'>Disable</button><button className='btn btn-sm btn-outline-danger ms-3'>Delete</button></div></>
            },
            // Add more rows if needed
        ];
    } else if (route === 'managesCompanys') {
        return [
            {
                img: <img src="https://cdn-icons-png.flaticon.com/128/16183/16183626.png"  height={"30%"} width={"30%"} alt="Jobs-Logo" />,
                name: 'Microsoft',
                statuss: <><span className="status-badges ms-auto me-auto">Enabled</span><span className="status-badges ms-auto me-auto">Approved</span></>,

                datePosted: <span className="date-posted-badge">Sep 5, 2024</span>,

                actions: 
                // <div className="dropdown-center over">
                //         <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                //             Centered dropdown
                //         </button>
                //         <ul className="dropdown-menu z-3">
                //             <li><a className="dropdown-item" href="#">Action</a></li>
                //             <li><a className="dropdown-item" href="#">Action two</a></li>
                //             <li><a className="dropdown-item" href="#">Action three</a></li>
                //         </ul>
                //     </div>
                    <><div className=''><button className='btn btn-sm btn-outline-primary '>Edit</button><button className='btn btn-sm btn-outline-warning ms-3'>Disable</button><button className='btn btn-sm btn-outline-danger ms-3'>Delete</button></div></>,
            },
            
        ];
    }

    return [];
}

// eslint-disable-next-line react/prop-types
function Ftable({ route }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const columns = columnsByRoute[route];
    const rows = createDataByRoute(route);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="table-wrapper">
            <Paper sx={{ width: '100%', overflow: 'hidden' }} className="mt-5 rounded-4">
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table stickyHeader aria-label="sticky table" className='p-0'>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    className="bg-dark text-white fs-5"
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        </div>
    );
}

export default Ftable;
