import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  OrangeBar,
  MainCard,
  MainCardText,
  SimpleCard,
  CardImage,
  CardTitle,
  CardText,
  FloatingView,
  RequestLoanButton,
  RequestLoanButtonText,
} from './styles';

import loan from '../../assets/loan.png';
import moneyBag from '../../assets/money-bag.png';
import moneyBag2 from '../../assets/money-bag-2.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <OrangeBar />
      <Container>
        <MainCard>
          <MainCardText>
            Empréstimo descomplicado, com serviços para cartão de crédito,
            cheque e consignado.
          </MainCardText>
          <MainCardText>
            Divida em até
            <MainCardText style={{ color: '#f3903d' }}> 12 vezes!</MainCardText>
          </MainCardText>
        </MainCard>

        <SimpleCard>
          <CardImage source={loan} />
          <CardTitle>Empréstimo Pessoal</CardTitle>
          <CardText>
            Sem consulta. Aprovação em até 30min. Pague com cartão de crédito.
            Temos as melhores taxas do mercado.
          </CardText>
        </SimpleCard>

        <SimpleCard>
          <CardImage source={moneyBag} />
          <CardTitle>Pague em até 12x</CardTitle>
          <CardText>
            Parcele o seu empréstimo em até 12x no cartão de crédito e garanta
            mais agilidade para você.
          </CardText>
        </SimpleCard>

        <SimpleCard>
          <CardImage source={moneyBag2} />
          <CardTitle>Dinheiro em até 30 min</CardTitle>
          <CardText>
            Após a aprovação do empréstimo, a quantia solicitada será depositada
            na sua conta bancária em até 30 min.
          </CardText>
        </SimpleCard>
      </Container>

      <FloatingView>
        <RequestLoanButton onPress={() => navigation.navigate('RequestLoan')}>
          <RequestLoanButtonText>Solicitar empréstimo</RequestLoanButtonText>
        </RequestLoanButton>
      </FloatingView>
    </>
  );
};

export default Home;
