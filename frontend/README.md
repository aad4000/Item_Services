
# My Next.js App

This repository contains a Next.js application built with modern web development practices. The project includes a home page, an add-item page, and detailed item views. It also supports features like authentication and item fetching from an API.

---

## Prerequisites

Before proceeding, ensure you have the following installed on your machine:

- **Node.js**: v18 or above
- **Docker**: Installed and running (if using containerized deployment)

Verify Docker is running using:
```bash
docker info
```

---

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/aad4000/Item_Services.git
cd Item_Services
```

---

### 2. Install Dependencies

Navigate to the frontend folder and install dependencies:

```bash
cd frontend
npm install
```

---

### 3. Create the `.env.local` File

Create a `.env.local` file in the root of the `frontend` folder with the following content:

```env
NEXT_PUBLIC_API_BASE_URL=<API_BASE_URL>
NEXT_PUBLIC_API_USERNAME=<API_USERNAME>
NEXT_PUBLIC_API_PASSWORD=<API_PASSWORD>
```

Replace `<API_BASE_URL>`, `<API_USERNAME>`, and `<API_PASSWORD>` with the appropriate values for your environment.

---

## Running the Application

### Option 1: Run Locally

To run the application in development mode:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

---

### Option 2: Build and Deploy with Docker

1. Build the Docker image:

   ```bash
   docker build -t my-nextjs-app .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 my-nextjs-app
   ```

The application will be accessible at `http://localhost:3000`.

---

## Project Structure

```
.
├── components
│   ├── Header.js       # Header component with navigation and logout functionality
├── pages
│   ├── _app.js         # Custom App component for global styles
│   ├── index.js        # Home page
│   ├── add-item.js     # Page to add new items
│   └── items
│       └── [id].js     # Dynamic route for item details
├── public
│   └── ...             # Public assets
├── styles
│   ├── globals.css     # Global styles including Tailwind CSS
├── utils
│   ├── api.js          # API helper functions
├── Dockerfile          # Docker configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

---

## Usage

### Authentication

- Use the following credentials to log in:
  - **Username**: `admin`
  - **Password**: `password`

### Navigate

- **Home Page**: View a list of available items.
- **Add Item Page**: Add a new item with a name, description, and price.
- **Item Details**: View detailed information about a specific item.

---

## Troubleshooting

### Common Issues

1. **Global CSS Import Error**:
   - Ensure `globals.css` is only imported in `pages/_app.js`.

2. **Docker Build Errors**:
   - Verify the `Dockerfile` and ensure all dependencies are installed correctly.

3. **API Errors**:
   - Check your `.env.local` file for correct API credentials and base URL.
