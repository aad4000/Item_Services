const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_USERNAME = process.env.NEXT_PUBLIC_API_USERNAME;
const API_PASSWORD = process.env.NEXT_PUBLIC_API_PASSWORD;

// Helper function to generate Basic Auth headers
function getAuthHeaders() {
  const encodedCredentials = btoa(`${process.env.NEXT_PUBLIC_API_USERNAME}:${process.env.NEXT_PUBLIC_API_PASSWORD}`);
  const headers = {
    Authorization: `Basic ${encodedCredentials}`,
  };
  console.log('Auth Headers:', headers);
  return headers;
}



// Fetch all items from the API
export async function getAllItems() {
  const response = await fetch(`${API_BASE_URL}`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch items.');
  }
  return response.json();
}

// Fetch a single item by ID from the API
export async function getItemById(id) {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch item with ID ${id}.`);
  }
  return response.json();
}

// Create a new item
export async function createItem(item) {
  const response = await fetch(`${API_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to create item: ${errorMessage}`);
  }
  return response.json();
}

// Update an existing item by ID
export async function updateItem(id, item) {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to update item: ${errorMessage}`);
  }
  return response.json();
}

// Delete an item by ID
export async function deleteItem(id) {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`Failed to delete item: ${errorMessage}`);
  }
  return response.ok;
}
