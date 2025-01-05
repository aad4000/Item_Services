
# Item Services Application

## Overview

This application is a Spring Boot service that uses MongoDB as its database. It can be containerized using Docker for seamless deployment.

---

## Prerequisites

Before running this application, ensure the following tools are installed on your local machine:

1. **Java 18** - Required to build and run the Spring Boot application.
2. **Docker** - Used for containerizing and running the application.

Verify Docker is running using:
```bash
docker info
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aad4000/Item_Services.git
cd Item_Services/backend
```

### 2. Add the `.env` File

Create a `.env` file in the root of the `backend` folder with the following content:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/itemdb?retryWrites=true&w=majority
SPRING_SECURITY_USER_NAME=admin
SPRING_SECURITY_USER_PASSWORD=admin123
```

Replace `<username>` and `<password>` with your MongoDB credentials.

---

## Building and Running the Application

### Build the Application

Use Gradle to build the application and create a JAR file:

```bash
./gradlew clean build -x test
```

This command generates a JAR file in the `build/libs/` directory.

---

## Docker Setup

### Dockerfile

Below is the `Dockerfile` used to containerize the application:

```dockerfile
# Use a lightweight OpenJDK image
FROM openjdk:18-jdk-slim

# Set working directory inside the container
WORKDIR /app

# Copy the jar file into the container
COPY build/libs/item-services-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your application will run on
EXPOSE 8080

# Specify the command to run your application
CMD ["java", "-jar", "app.jar"]
```

### Build the Docker Image

To build the Docker image, run:

```bash
docker build -t item-services:latest .
```

### Run the Docker Container

To start the container, use:

```bash
docker run -p 8080:8080 --env-file .env --name item-services item-services:latest
```

- `-p 8080:8080`: Maps the application port to your host's port 8080.
- `--env-file .env`: Supplies environment variables from the `.env` file.

---

## API Usage

### Base URL

```
http://localhost:8080
```

### Example Endpoints

#### 1. Create an Item

- **URL**: `/api/items`
- **Method**: `POST`
- **Headers**: `Authorization: Basic base64(admin:admin123)`
- **Request Body** (JSON):
  ```json
  {
    "name": "Sample Item",
    "description": "This is a sample description."
  }
  ```
- **Response**:
  ```json
  {
    "name": "Sample Item",
    "description": "This is a sample description."
  }
  ```

#### 2. Retrieve All Items

- **URL**: `/api/items`
- **Method**: `GET`
- **Headers**: `Authorization: Basic base64(admin:admin123)`

#### 3. Retrieve Item by ID

- **URL**: `/api/items/{id}`
- **Method**: `GET`
- **Headers**: `Authorization: Basic base64(admin:admin123)`
- **Response Example**:
  ```json
  {
    "id": "60d9f114f3d0a53b5447a00d",
    "name": "Sample Item",
    "description": "This is a sample description."
  }
  ```

---

## Stopping and Removing Docker Resources

### 1. Stop the Container:

```bash
docker stop item-services
```

### 2. Remove the Container:

```bash
docker rm item-services
```

### 3. Remove the Image (Optional):

```bash
docker rmi item-services:latest
```

---

## Troubleshooting

### Common Issues

- **Port Conflicts**: Ensure port `8080` is not being used by another application.
- **Docker Setup**: Verify Docker is running properly on your desktop.
- **Environment Variables**: Double-check the `.env` file for typos or missing variables.

---

Feel free to reach out if you encounter any issues or need further assistance!
