module.exports = () => {
  const backendURL = process.env.BACKEND_URL;

  if (!backendURL) {
    throw new Error(`'BACKEND_URL' environment variable is missing`);
  }

  const domainName = new URL(backendURL).hostname;

  const connectionString = process.env.MONGODB_STORE_CONNECTION_STRING;

  if (!connectionString) {
    throw new Error(`'MONGODB_STORE_CONNECTION_STRING' environment variable is missing`);
  }

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error(`'JWT_SECRET' environment variable is missing`);
  }

  return {
    type: 'function',
    provider: 'aws',
    domainName,
    files: ['./build'],
    main: './build/handler.js',
    includeDependencies: true,
    environment: {
      MONGODB_STORE_CONNECTION_STRING: connectionString,
      JWT_SECRET: jwtSecret
    },
    aws: {
      region: 'us-west-2',
      lambda: {
        memorySize: 1024,
        timeout: 15
      }
    }
  };
};
