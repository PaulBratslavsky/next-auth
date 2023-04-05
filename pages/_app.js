import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { DataStoreProvider } from '@/context/dataStore';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

const API_URL = process.env.STRAPI_URL || "http://localhost:1337";

const client = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <DataStoreProvider storageKey="food-app">
        <Layout><Component {...pageProps} /></Layout>
      </DataStoreProvider>
    </ApolloProvider>
  )
}
