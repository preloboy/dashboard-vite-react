import './App.css'
import Auth from './components/auth/Auth';
import { AuthProvider } from './providers/AuthProvider';
import { DatabaseProvider } from './providers/DataProvider';

export default function App() {

  return (
    <AuthProvider>
      <DatabaseProvider>
        <Auth />
      </DatabaseProvider>
    </AuthProvider>
  )
}
