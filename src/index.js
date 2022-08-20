import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const client = new ApolloClient({
  uri: 'http://localhost:5000/', 
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
