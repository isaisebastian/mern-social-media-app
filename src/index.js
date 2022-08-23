import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import { HttpLink, ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const link = new HttpLink({
  uri: "http://localhost:5000/"
  // Additional options
});

const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return{ 
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(link), 
  cache: new InMemoryCache(),
});


root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
