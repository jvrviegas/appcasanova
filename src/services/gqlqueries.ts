import { gql } from 'apollo-boost';

export const AUTH_USER = gql`
  mutation ObterToken($username: String!, $password: String!) {
    obterToken(username: $username, password: $password) {
      token
    }
  }
`;

export const LOAN_REQUESTS = gql`
  query {
    todasSolicitacoesEmprestimoRelay {
      edges {
        node {
          id
        }
      }
    }
  }
`;
