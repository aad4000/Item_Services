import { useState } from 'react';
import { createItem } from '../utils/api';
import { useRouter } from 'next/router';
import Header from '../components/Header';
//import '../styles/globals.css';

export default function AddItem() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Name is required.');
      setSuccess('');
      return;
    }

    try {
      await createItem({ name, description });
      setSuccess('Item created successfully!');
      setError('');
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (err) {
      setError(err.message); 
    }
  };

  return (
    <div className="add-item-container">
      <Header />
      <div className="main-content">
        <h1 className="add-item-title">Add New Item</h1>
        <form onSubmit={handleSubmit} className="add-item-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="add-item-input"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="add-item-input"
          />
          <button type="submit" className="add-item-button">
            Add Item
          </button>
        </form>
        {success && <p className="add-item-success">{success}</p>}
        {error && <p className="add-item-error">{error}</p>}
      </div>
    </div>
  );
}
