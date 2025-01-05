import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/router';
//import '../styles/globals.css';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { redirect } = router.query; // Retrieve intended destination

  const handleLogin = (e) => {
    e.preventDefault();

    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      // Set authentication cookie
      Cookies.set('isAuthenticated', 'true', { expires: 1, path: '/' });

      // Redirect to the original destination or home page
      router.push(redirect || '/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to your account</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
