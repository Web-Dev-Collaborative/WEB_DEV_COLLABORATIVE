# ![RealWorld Example App](assets/logo.png)

> ### React/Layr codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

### [Demo](https://react-layr-realworld-example-app.layrjs.com/)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)

This codebase was created to demonstrate a fully fledged fullstack application built with [React](https://reactjs.org/) and [Layr](https://layrjs.com/) including CRUD operations, authentication, routing, pagination, and more.

## How it works

### General architecture

Both the frontend and the backend use Layr [Layr](https://layrjs.com/), so there is no web API in between. The frontend communicate directly with the backend.

### Hosting

- The frontend is statically hosted in AWS S3 + CloudFront.
- The backend is exposed via a single function hosted in AWS Lambda.
- The database is hosted in a MongoDB Atlas cluster (free tier).

## Install

Install the npm dependencies with:

```sh
npm install
```

## Develop

### Prerequisites

- Make sure you have [Docker](https://www.docker.com/) installed as it is used to execute the MongoDB development database.
- Generate a JWT secret by running the following command in your terminal:
  - `openssl rand -hex 64`

### Running the app in development mode

Execute the following command:

```sh
FRONTEND_URL=http://localhost:13577 \
  BACKEND_URL=http://localhost:13578 \
  MONGODB_STORE_CONNECTION_STRING=mongodb://test:test@localhost:13579/test \
  JWT_SECRET="********" \
  npm run start
```

The app should then be available at http://localhost:13577.

### Migrating the database

Navigate to the `./backend` directory and execute the following command:

```sh
FRONTEND_URL=http://localhost:13577 \
  BACKEND_URL=http://localhost:13578 \
  MONGODB_STORE_CONNECTION_STRING=mongodb://test:test@localhost:13579/test \
  JWT_SECRET="********" \
  npm run migrate
```

## Debug

### Client

Add the following entry in the local storage of your browser:

```
| Key   | Value     |
| ----- | --------- |
| debug | layr:* |
```

### Server

Add the following environment variables when starting the app:

```sh
DEBUG=layr:* DEBUG_DEPTH=10
```

## To do

- Implement a test suite
