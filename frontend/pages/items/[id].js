import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getItemById } from '../../utils/api';
import Header from '../../components/Header';
//import '../../styles/globals.css';

export default function ItemDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    async function fetchItem() {
      try {
        const data = await getItemById(id);
        if (!data) {
          throw new Error('Item not found');
        }
        setItem(data);
        setError(''); // Clear any previous errors
      } catch (err) {
        if (err.response) {
          // If the API returns a response, display the error message
          const errorDetails = await err.response.json();
          setError(`Error ${err.response.status}: ${errorDetails.message || 'Item not found.'}`);
        } else {
          // If no response is returned, show a generic error message
          setError(err.message || 'An unknown error occurred.');
        }
      }
    }

    fetchItem();
  }, [id]);

  if (error) {
    return (
      <div className="error-container">
        <Header />
        <p className="error-message">Error: {error}</p>
        <button
          className="back-button"
          onClick={() => router.push('/')}
        >
          Back to Home
        </button>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="loading-container">
        <Header />
        <p className="loading-message">Loading...</p>
      </div>
    );
  }

  return (
    <div className="item-details-container">
      <Header />
      <div className="item-card">
        <h1 className="item-title">{item.name}</h1>
        <p className="item-description">{item.description || 'No description available'}</p>
      </div>
      <button
        className="back-button"
        onClick={() => router.push('/')}
      >
        Back to Home
      </button>
    </div>
  );
}
