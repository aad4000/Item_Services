# My Next.js App

This repository contains a Next.js application built with modern web development practices. The project includes a home page, an add-item page, and detailed item views. It also supports features like authentication and item fetching from an API.

## Features

- **Next.js Framework**: A modern React framework with server-side rendering (SSR) and static site generation (SSG).
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Responsive Design**: Optimized for all device sizes.
- **Global Styling**: Centralized CSS styling managed in `globals.css`.
- **Item Management**:
  - View a list of items.
  - View detailed information for each item.
  - Add new items.
- **Authentication**:
  - Hardcoded login credentials for demo purposes.
  - Persistent session using cookies.
- **Dockerized Deployment**: The application can be containerized for deployment.

## Installation

### Prerequisites

- Node.js (v18 or above)
- Docker (if using containerized deployment)

### Clone the Repository

```bash
git clone https://github.com/aad4000/Item_Services.git
cd Item_Services
```

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Build and Deploy

### Local Build

```bash
npm run build
npm start
```

### Docker Build

1. Build the Docker image:

   ```bash
   docker build -t my-nextjs-app .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 my-nextjs-app
   ```

The application will be accessible at `http://localhost:3000`.

## Environment Variables

Create a `.env.local` file to manage environment variables:

```env
NEXT_PUBLIC_API_BASE_URL=<API_BASE_URL>
NEXT_PUBLIC_API_USERNAME=<API_USERNAME>
NEXT_PUBLIC_API_PASSWORD=<API_PASSWORD>
```

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

## Usage

### Authentication

- Use the following credentials to log in:
  - **Username**: `admin`
  - **Password**: `password`

### Navigate

- Home Page: View a list of available items.
- Add Item Page: Add a new item with a name, description, and price.
- Item Details: View detailed information about a specific item.

## Troubleshooting

### Common Issues

1. **Global CSS Import Error**:

   - Ensure `globals.css` is only imported in `pages/_app.js`.

2. **Docker Build Errors**:

   - Verify the `Dockerfile` and ensure all dependencies are installed correctly.

3. **API Errors**:

   - Check your `.env.local` file for correct API credentials and base URL.

##



