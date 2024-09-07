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
};

function createDataByRoute(route) {
    if (route === 'application') {
        return [
            {
                jobTitle: 'Billing Support Specialist Job',
                coverLetter: <button className="btn btn-sm btn-outline-primary">Read Cover Letter</button>,
                cv: <button className="btn btn-sm btn-outline-primary">View CV</button>,
                email: 'khushi@1234gmail.com',
                status: <span className="badge bg-warning text-dark p-2">Applied</span>,
            },
            // Add more rows
        ];
    } else if (route === 'resumes') {
        return [
            {
                name: 'rr',
                title: 'web',
                status: <>
                    <span className="badge bg-success p-2">Enabled</span>
                    <span className="badge bg-success p-2">Approved</span>
                </>,
                categories: 'IT/Telecommunication',
                datePosted: <span className="badge bg-success p-2 ">Sep 5, 2024</span>,
                result: <>
                    <span>Show Results</span>
                    <div>
                        <button className='btn btn-sm btn-outline-primary'>Edit</button>
                        <button className='btn btn-sm btn-outline-primary'>Disable</button>
                        <button className='btn btn-sm btn-outline-primary'>Delete</button>
                    </div>
                </>,
            },
            // Add more rows
        ];
    }
    return [];
}

export default function Ftable({ route }) {
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
        <Paper sx={{ width: '100%', overflow: 'hidden' }} className="mt-5 rounded-4">
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table stickyHeader aria-label="sticky table">
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
    );
}
