import './App.css'
import Auth from './components/Auth';
import { AuthProvider } from './contexts/AuthContext';
import { DatabaseProvider } from './contexts/DataContext';

export default function App() {

  return (
    <AuthProvider>
      <DatabaseProvider>
        <Auth />
      </DatabaseProvider>
    </AuthProvider>
  )
}
