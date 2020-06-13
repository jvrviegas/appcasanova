import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import client from '../services/apollo';

import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => (
  <ApolloProvider client={client}>
    <AuthProvider>{children}</AuthProvider>
  </ApolloProvider>
);

export default AppProvider;
