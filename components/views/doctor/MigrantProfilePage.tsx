import React from 'react';
import Card from '../../common/Card';
import {
    dummyHealthRecords,
    dummyPrescriptions,
    dummyLabReports,
    dummyVaccinations,
} from '../../../data/dummyData';
import { MigrantProfile } from '../../../types';

const StethoscopeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 0a5 5 0 10-7.07 7.071 5 5 0 007.07-7.071zm-9.192 9.192a5 5 0 117.07-7.07 5 5 0 01-7.07 7.07zM9 11a1 1 0 11-2 0 1 1 0 012 0z" /></svg>;
const PillIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>;
const TestTubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a4 4 0 00-5.656 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 17.657V19a2 2 0 01-2 2H8a2 2 0 01-2-2v-1.343" /></svg>;
const SyringeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>;
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>;


interface MigrantProfilePageProps {
  migrant: MigrantProfile;
  onBack: () => void;
  onAddRecord: () => void;
}

const MigrantProfilePage: React.FC<MigrantProfilePageProps> = ({ migrant, onBack, onAddRecord }) => {
    const healthRecords = dummyHealthRecords.filter(r => r.patientId === migrant.id);
    const prescriptions = dummyPrescriptions.filter(p => p.patientId === migrant.id);
    const labReports = dummyLabReports.filter(r => r.patientId === migrant.id);
    const vaccinations = dummyVaccinations.filter(v => v.patientId === migrant.id);

    return (
        <div className="space-y-8">
             <div className="flex items-center justify-between">
                <button onClick={onBack} className="flex items-center text-sm font-medium text-accent-cyan hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Back to Search Results
                </button>
                <button onClick={onAddRecord} className="flex items-center px-4 py-2 font-medium text-white rounded-md bg-accent-pink/80 hover:bg-accent-pink transition-colors">
                    <PlusIcon /> Add New Record
                </button>
            </div>

            <Card>
                 <div className="flex items-center">
                    <img src={migrant.avatarUrl} alt={migrant.name} className="w-20 h-20 rounded-full border-2 border-accent-cyan/50" />
                    <div className="ml-6">
                        <h2 className="text-2xl font-bold text-white">{migrant.name}</h2>
                        <p className="text-text-secondary">ID: {migrant.id}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-6 text-sm md:grid-cols-4 text-text-primary">
                    <div><span className="font-semibold text-text-secondary">Gender:</span> {migrant.gender}</div>
                    <div><span className="font-semibold text-text-secondary">DoB:</span> {migrant.dateOfBirth}</div>
                    <div><span className="font-semibold text-text-secondary">Phone:</span> {migrant.phone}</div>
                    <div><span className="font-semibold text-text-secondary">Address:</span> {migrant.address}</div>
                </div>
            </Card>

            <Card>
                <h2 className="text-2xl font-semibold text-white flex items-center mb-4"><StethoscopeIcon />Consultations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {healthRecords.length > 0 ? healthRecords.map(record => (
                        <div key={record.id} className="p-5 bg-black/20 rounded-lg border border-glow-border">
                            <p className="text-sm font-semibold text-text-secondary">{record.date}</p>
                            <h3 className="text-xl font-bold text-accent-cyan mt-1">{record.diagnosis}</h3>
                            <p className="text-sm text-text-primary mt-1">with {record.doctorName}</p>
                            <p className="text-text-secondary mt-3 text-sm">{record.notes}</p>
                        </div>
                    )) : <p className="text-text-secondary col-span-full">No consultation records found.</p>}
                </div>
            </Card>

            <Card>
                <h2 className="text-2xl font-semibold text-white flex items-center mb-4"><PillIcon />Prescriptions</h2>
                {prescriptions.length > 0 ? (
                    <div className="overflow-hidden rounded-lg">
                        <table className="min-w-full">
                            <thead className="bg-black/20">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Medication</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Dosage & Frequency</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-glow-border">
                                {prescriptions.map(p => (
                                    <tr key={p.id} className="hover:bg-black/10">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">{p.medication}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{p.dosage} ({p.frequency})</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{p.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : <p className="text-text-secondary">No prescription records found.</p>}
            </Card>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <h2 className="text-2xl font-semibold text-white flex items-center mb-4"><TestTubeIcon />Lab Reports</h2>
                    <div className="space-y-4">
                        {labReports.length > 0 ? labReports.map(report => (
                            <div key={report.id} className="p-4 bg-black/20 rounded-lg border border-glow-border flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-text-primary">{report.testName}</p>
                                    <p className="text-sm text-text-secondary">{report.date}</p>
                                </div>
                                <a href={report.fileUrl} className="text-sm font-medium text-accent-cyan hover:underline">View Report</a>
                            </div>
                        )) : <p className="text-text-secondary">No lab reports found.</p>}
                    </div>
                </Card>

                <Card>
                    <h2 className="text-2xl font-semibold text-white flex items-center mb-4"><SyringeIcon />Vaccinations</h2>
                    <div className="space-y-4">
                        {vaccinations.length > 0 ? vaccinations.map(vax => (
                            <div key={vax.id} className="p-4 bg-black/20 rounded-lg border border-glow-border">
                                <p className="font-semibold text-text-primary">{vax.vaccineName}</p>
                                <p className="text-sm text-text-secondary">Dose {vax.dose} on {vax.date}</p>
                            </div>
                        )) : <p className="text-text-secondary">No vaccination records found.</p>}
                    </div>
                </Card>
             </div>
        </div>
    );
};

export default MigrantProfilePage;