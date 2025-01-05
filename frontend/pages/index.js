import { useEffect, useState } from 'react';
import { getAllItems } from '../utils/api';
//import '../styles/globals.css';

import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const fetchedItems = await getAllItems();
        setItems(fetchedItems);
      } catch (err) {
        setError(err.message); 
      }
    }

    fetchItems();
  }, []);

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="home-container">
      <Header />
      <div className="main-content">
        <h1 className="home-title">Available Items</h1>
        {items.length === 0 ? (
          <p>No items available.</p>
        ) : (
          <ul className="item-list">
            {items.map((item) => (
              <li key={item.id} className="item-card">
                <Link href={`/items/${item.id}`} className="item-card-link">
                  <h2 className="item-name">{item.name}</h2>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
