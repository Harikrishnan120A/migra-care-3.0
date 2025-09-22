import React, { useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { SidebarProvider } from './contexts/SidebarContext';
import LoginPage from './components/views/LoginPage';
import Dashboard from './components/views/Dashboard';

const AppContent: React.FC = () => {
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        const blob = document.getElementById('blob');
        if (!blob) return;

        const handlePointerMove = (event: PointerEvent) => {
            const { clientX, clientY } = event;
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 3000, fill: "forwards" });
        };

        window.addEventListener('pointermove', handlePointerMove);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
        };
    }, []);

    return isAuthenticated ? <Dashboard /> : <LoginPage />;
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <SidebarProvider>
                <div className="min-h-screen text-text-primary font-sans">
                    <AppContent />
                </div>
            </SidebarProvider>
        </AuthProvider>
    );
};

export default App;
