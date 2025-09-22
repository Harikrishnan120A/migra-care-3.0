import React from 'react';
import Card from '../../common/Card';
import {
    dummyHealthRecords,
    dummyPrescriptions,
    dummyLabReports,
    dummyVaccinations,
} from '../../../data/dummyData';

const StethoscopeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 0a5 5 0 10-7.07 7.071 5 5 0 007.07-7.071zm-9.192 9.192a5 5 0 117.07-7.07 5 5 0 01-7.07 7.07zM9 11a1 1 0 11-2 0 1 1 0 012 0z" /></svg>;
const PillIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>;
const TestTubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a4 4 0 00-5.656 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 17.657V19a2 2 0 01-2 2H8a2 2 0 01-2-2v-1.343" /></svg>;
const SyringeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>;


const HealthRecordsPage: React.FC = () => {
    return (
        <div className="space-y-8">
            <Card className="slide-in-up-content" style={{ animationDelay: '100ms' }}>
                <h2 className="text-2xl font-semibold text-white flex items-center mb-4"><StethoscopeIcon />Consultations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dummyHealthRecords.map((record, index) => (
                        <div key={record.id} className="p-5 bg-black/20 rounded-lg border border-glow-border slide-in-up-content" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                            <p className="text-sm font-semibold text-text-secondary">{record.date}</p>
                            <h3 className="text-xl font-bold text-accent-cyan mt-1">{record.diagnosis}</h3>
                            <p className="text-sm text-text-primary mt-1">with {record.doctorName}</p>
                            <p className="text-text-secondary mt-3 text-sm">{record.notes}</p>
                        </div>
                    ))}
                </div>
            </Card>

            <Card className="slide-in-up-content" style={{ animationDelay: '300ms' }}>
                <h2 className="text-2xl font-semibold text-white flex items-center mb-4"><PillIcon />Prescriptions</h2>
                <div className="overflow-hidden rounded-lg">
                    <table className="min-w-full">
                        <thead className="bg-black/20">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Medication</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Dosage</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Frequency</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-glow-border">
                            {dummyPrescriptions.map(p => (
                                <tr key={p.id} className="hover:bg-black/10 transition-colors duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">{p.medication}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{p.dosage}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{p.frequency}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{p.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="slide-in-up-content" style={{ animationDelay: '400ms' }}>
                    <h2 className="text-2xl font-semibold text-white flex items-center mb-4"><TestTubeIcon />Lab Reports</h2>
                    <div className="space-y-4">
                        {dummyLabReports.map(report => (
                            <div key={report.id} className="p-4 bg-black/20 rounded-lg border border-glow-border flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-text-primary">{report.testName}</p>
                                    <p className="text-sm text-text-secondary">{report.date}</p>
                                </div>
                                <a href={report.fileUrl} className="text-sm font-medium text-accent-cyan hover:underline">View Report</a>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="slide-in-up-content" style={{ animationDelay: '500ms' }}>
                    <h2 className="text-2xl font-semibold text-white flex items-center mb-4"><SyringeIcon />Vaccinations</h2>
                    <div className="space-y-4">
                        {dummyVaccinations.map(vax => (
                            <div key={vax.id} className="p-4 bg-black/20 rounded-lg border border-glow-border">
                                <p className="font-semibold text-text-primary">{vax.vaccineName}</p>
                                <p className="text-sm text-text-secondary">Dose {vax.dose} on {vax.date}</p>
                            </div>
                        ))}
                    </div>
                </Card>
             </div>
        </div>
    );
};

export default HealthRecordsPage;