import { gql } from 'apollo-boost';

export const AUTH_USER = gql`
  mutation ObterToken($username: String!, $password: String!) {
    obterToken(username: $username, password: $password) {
      token
    }
  }
`;

export const LIST_LOANS = gql`
  query ListLoans($cursor: String) {
    todasSolicitacoesEmprestimoRelay(first: 20, after: $cursor) {
      edges {
        node {
          pk
          data
          valorDesejado
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const LOAN_DETAILS = gql`
  query loanDetails($id: ID!) {
    solicitacaoEmprestimo(id: $id) {
      cliente {
        nome
        cpf
      }
      valorDesejado
      data
      parcelas
      taxaAplicada
    }
  }
`;
