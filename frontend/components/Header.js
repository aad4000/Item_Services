import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsAuthenticated(!!Cookies.get('isAuthenticated'));
  }, []);

  const handleLogout = () => {
    Cookies.remove('isAuthenticated');
    router.push('/login'); // Redirect to the login page
  };

  

  return (
    <header className="header-container">
      <nav className="nav">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/add-item" className="nav-link">
          Add Item
        </Link>
      </nav>
      {isAuthenticated && (
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      )}
    </header>
  );
}
