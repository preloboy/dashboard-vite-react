import './App.css'
import Auth from './components/auth/Auth';
import { AuthProvider } from './providers/AuthProvider';

export default function App() {

  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  )
}
