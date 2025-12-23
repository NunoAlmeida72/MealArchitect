import { AuthProvider, useAuth } from './components/AuthContext';
import Auth from './components/Auth';
import './App.css';
import { Button } from './components/ui/button';
import logo from './assets/logo.svg';

function AppContent() {
  const { session, loading, signOut } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!session) {
    return <Auth />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MealArchitect Logo" className="h-30 w-full" />
          </div>
          <Button
            onClick={signOut}
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Sign out
          </Button>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg border-4 border-dashed border-gray-200 p-10 text-center">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Welcome!</h2>
              <p className="text-gray-500">You are logged in as {session.user.email}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
