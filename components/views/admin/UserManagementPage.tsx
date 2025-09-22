import React, { useState, useMemo } from 'react';
import Card from '../../common/Card';
import { dummyMigrants, dummyDoctors, dummyAdmins } from '../../../data/dummyData';
import { User, UserRole } from '../../../types';

type Tab = 'All' | 'Migrants' | 'Doctors' | 'Admins';

const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>;

const UserManagementPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('All');
    
    const allUsers: User[] = useMemo(() => [
        ...dummyMigrants,
        ...dummyDoctors,
        ...dummyAdmins,
    ], []);

    const filteredUsers = useMemo(() => {
        switch (activeTab) {
            case 'Migrants':
                return allUsers.filter(u => u.role === UserRole.MIGRANT);
            case 'Doctors':
                return allUsers.filter(u => u.role === UserRole.DOCTOR);
            case 'Admins':
                return allUsers.filter(u => u.role === UserRole.ADMIN);
            case 'All':
            default:
                return allUsers;
        }
    }, [activeTab, allUsers]);

    const tabs: Tab[] = ['All', 'Migrants', 'Doctors', 'Admins'];

    return (
        <Card>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="border-b border-glow-border sm:border-b-0">
                    <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 focus:outline-none ${
                                    activeTab === tab
                                        ? 'border-accent-cyan text-accent-cyan'
                                        : 'border-transparent text-text-secondary hover:text-white hover:border-white/50'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
                 <button onClick={() => alert('Create new user form coming soon!')} className="flex items-center justify-center sm:w-auto w-full px-4 py-2 font-medium text-white rounded-md bg-accent-cyan/80 hover:bg-accent-cyan transition-colors btn-pulse">
                    <PlusIcon /> Create New User
                </button>
            </div>
            
            <div className="mt-6 overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-black/20">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">User ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Role</th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-glow-border">
                        {filteredUsers.map(user => (
                            <tr key={user.id} className="hover:bg-black/10 transition-colors duration-200">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src={user.avatarUrl} alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-text-primary">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{user.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        user.role === UserRole.MIGRANT ? 'bg-green-500/20 text-green-300' :
                                        user.role === UserRole.DOCTOR ? 'bg-accent-cyan/20 text-accent-cyan' :
                                        'bg-yellow-500/20 text-yellow-300'
                                    }`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                                    <button onClick={() => alert(`Editing user: ${user.name}`)} className="text-accent-cyan hover:underline btn-pulse">Edit</button>
                                    <button onClick={() => alert(`Deactivating user: ${user.name}`)} className="text-accent-pink hover:underline btn-pulse">Deactivate</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default UserManagementPage;