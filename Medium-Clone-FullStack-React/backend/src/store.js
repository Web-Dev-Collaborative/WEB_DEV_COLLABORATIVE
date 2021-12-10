import {MongoDBStore} from '@layr/mongodb-store';

export function createStore(rootComponent) {
  const connectionString = process.env.MONGODB_STORE_CONNECTION_STRING;

  if (!connectionString) {
    throw new Error(`'MONGODB_STORE_CONNECTION_STRING' environment variable is missing`);
  }

  const store = new MongoDBStore(connectionString);

  store.registerRootComponent(rootComponent);

  return store;
}
