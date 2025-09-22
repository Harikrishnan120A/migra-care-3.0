import React from 'react';
import { dummyAppointments, dummyHealthRecords } from '../../../data/dummyData';

interface DashboardContentProps {
    onNavigate: (view:string) => void;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ onNavigate }) => {
    const upcomingAppointment = dummyAppointments.find(a => a.status === 'Upcoming');
    const latestRecord = dummyHealthRecords[0];

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Upcoming Appointment */}
            <div className="p-6 bg-glass-bg rounded-2xl shadow-lg backdrop-blur-lg border border-glow-border slide-in-up-content interactive-card transition-transform duration-300" style={{animationDelay: '100ms'}}>
                <h3 className="text-lg font-semibold text-text-secondary">Upcoming Appointment</h3>
                {upcomingAppointment ? (
                     <div className="mt-4">
                        <p className="text-2xl font-bold text-accent-cyan">{upcomingAppointment.date}</p>
                        <p className="text-text-secondary">{upcomingAppointment.time}</p>
                        <p className="mt-2 font-semibold text-text-primary">{upcomingAppointment.doctorName}</p>
                        <p className="text-sm text-text-secondary">{upcomingAppointment.specialization}</p>
                    </div>
                ) : (
                    <p className="mt-4 text-text-secondary">No upcoming appointments.</p>
                )}
            </div>

            {/* Latest Health Record */}
            <div className="p-6 bg-glass-bg rounded-2xl shadow-lg backdrop-blur-lg border border-glow-border slide-in-up-content interactive-card transition-transform duration-300" style={{animationDelay: '200ms'}}>
                <h3 className="text-lg font-semibold text-text-secondary">Recent Health Record</h3>
                {latestRecord ? (
                    <div className="mt-4">
                         <p className="text-sm font-bold text-text-primary">{latestRecord.date}</p>
                         <p className="mt-2 text-xl font-semibold text-accent-cyan">{latestRecord.diagnosis}</p>
                         <p className="mt-1 text-sm text-text-secondary">with {latestRecord.doctorName}</p>
                         <p className="mt-2 text-sm text-text-primary line-clamp-2">{latestRecord.notes}</p>
                    </div>
                ) : (
                     <p className="mt-4 text-text-secondary">No health records found.</p>
                )}
            </div>

            {/* Quick Actions */}
            <div className="p-6 bg-glass-bg rounded-2xl shadow-lg backdrop-blur-lg border border-glow-border slide-in-up-content" style={{animationDelay: '300ms'}}>
                <h3 className="text-lg font-semibold text-text-secondary">Quick Actions</h3>
                <div className="mt-4 space-y-3">
                    <button onClick={() => onNavigate('Appointments')} className="w-full px-4 py-2 text-left font-semibold text-white rounded-lg bg-accent-cyan/80 hover:bg-accent-cyan transition-colors btn-pulse">Book New Appointment</button>
                    <button onClick={() => onNavigate('AI Chatbot')} className="w-full px-4 py-2 text-left font-semibold text-white rounded-lg bg-accent-pink/80 hover:bg-accent-pink transition-colors btn-pulse">Ask AI Assistant</button>
                    <button onClick={() => onNavigate('Health Records')} className="w-full px-4 py-2 text-left font-semibold text-text-primary bg-white/10 hover:bg-white/20 rounded-lg transition-colors btn-pulse">Upload Document</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;