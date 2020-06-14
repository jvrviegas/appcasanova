import { format, parseISO } from 'date-fns';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

interface ClientData {
  nome: string;
  cpf: string;
}

interface LoanData {
  cliente: ClientData;
  data: string;
  parcelas: string;
  valorDesejado: number;
  taxaAplicada: number;
}

export const currencyFormat = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

const getInstallments = (value: string) => {
  return Number(value.split('_')[1]);
};

export const formatDate = (value: string) => {
  return format(parseISO(value), 'dd/MM/yyyy');
};

const calculateTotalDue = (value: number, tax: number) => {
  return value + value * (tax / 100);
};

const calculateInstallmentValue = (value: number, installments: number) => {
  return value / installments;
};

const formatLoan = (loan: LoanData) => {
  const { cliente, data, parcelas, valorDesejado, taxaAplicada } = loan;
  const totalDue = calculateTotalDue(valorDesejado, taxaAplicada);
  const installments = getInstallments(parcelas);

  return {
    client: { name: cliente.nome, cpf: cliente.cpf },
    date: formatDate(data),
    requestedAmount: currencyFormat(valorDesejado),
    totalDue: currencyFormat(totalDue),
    installments,
    installmentValue: currencyFormat(
      calculateInstallmentValue(totalDue, installments),
    ),
  };
};

export default formatLoan;
