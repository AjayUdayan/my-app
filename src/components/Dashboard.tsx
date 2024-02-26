import React, { useEffect, FormEvent } from 'react'
import { UserService } from '../services/UserService';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const columns = [
    {
        name: 'Title',
        selector: (row: any) => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: (row: any) => row.year,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]
function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userId = 1; // Assuming user ID
                const response = await UserService.getUser(userId);
                localStorage.setItem('userData', JSON.stringify(response.data.data));
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        }
        fetchData(); // Call the async function here

        // Since there's no cleanup needed, return nothing
        // (This satisfies the `EffectCallback` type)
        return;
    }, [UserService])
    return (
        <div>
            <div className="text-end mt-4 me-4">
                <button
                    onClick={handleLogout}
                    className="inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Logout
                </button>
            </div>

            <DataTable
                columns={columns}
                data={data}
            />
        </div>
    );
};

export default Dashboard