import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ActivityIndicator,
  View,
  Platform,
  Text,
  FlatList,
} from 'react-native';

import { useQuery } from '@apollo/react-hooks';
import { LIST_LOANS } from '../../services/gqlqueries';
import { currencyFormat, formatDate } from '../../utils/formatLoan';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  Title,
  Content,
  AndroidLoanDetails,
  IphoneLoanDetails,
  Info,
  InfoTitle,
  InfoText,
} from './styles';

const LoanHistory: React.FC = () => {
  const navigation = useNavigation();

  const { data, loading, error, fetchMore } = useQuery(LIST_LOANS);

  async function fetchData() {
    console.log('fetching data...');
    await fetchMore({
      variables: {
        cursor: data.todasSolicitacoesEmprestimoRelay.pageInfo.endCursor,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.todasSolicitacoesEmprestimoRelay.edges;
        const pageInfo =
          fetchMoreResult.todasSolicitacoesEmprestimoRelay.pageInfo;
        return newEdges.length
          ? {
              todasSolicitacoesEmprestimoRelay: {
                __typename:
                  prevResult.todasSolicitacoesEmprestimoRelay.__typename,
                edges: [
                  ...prevResult.todasSolicitacoesEmprestimoRelay.edges,
                  ...newEdges,
                ],
                pageInfo,
              },
            }
          : prevResult;
      },
    });
  }

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>{error.message}</Text>
      </View>
    );
  } else {
    return (
      <>
        {loading ? (
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator size="large" color="#f3903d" />
          </View>
        ) : (
          <Container>
            <Header>
              <Title>Minhas</Title>
              <Title>Solicitações</Title>
            </Header>
            <Content>
              <FlatList
                data={data.todasSolicitacoesEmprestimoRelay.edges}
                keyExtractor={(edge) => String(edge.node.pk)}
                onEndReachedThreshold={0.2}
                onEndReached={fetchData}
                ListFooterComponent={() =>
                  loading ? null : <ActivityIndicator size="large" animating />
                }
                renderItem={({ item }) => (
                  <>
                    {Platform.OS === 'android' ? (
                      <AndroidLoanDetails
                        key={item.node.id}
                        onPress={() =>
                          navigation.navigate('LoanDetails', {
                            id: item.node.pk,
                          })
                        }
                      >
                        <Info>
                          <InfoTitle>Data</InfoTitle>
                          <InfoText>{formatDate(item.node.data)}</InfoText>
                        </Info>
                        <Info>
                          <InfoTitle>Valor do empréstimo</InfoTitle>
                          <InfoText>
                            {currencyFormat(item.node.valorDesejado)}
                          </InfoText>
                        </Info>
                        <MaterialIcon
                          name="chevron-right"
                          size={28}
                          color="#f3903d"
                        />
                      </AndroidLoanDetails>
                    ) : (
                      <IphoneLoanDetails
                        key={item.node.pk}
                        onPress={() =>
                          navigation.navigate('LoanDetails', {
                            id: item.node.pk,
                          })
                        }
                      >
                        <Info>
                          <InfoTitle>Data</InfoTitle>
                          <InfoText>{formatDate(item.node.data)}</InfoText>
                        </Info>
                        <Info>
                          <InfoTitle>Valor do empréstimo</InfoTitle>
                          <InfoText>
                            {currencyFormat(item.node.valorDesejado)}
                          </InfoText>
                        </Info>
                        <MaterialIcon
                          name="chevron-right"
                          size={28}
                          color="#f3903d"
                        />
                      </IphoneLoanDetails>
                    )}
                  </>
                )}
              />
            </Content>
          </Container>
        )}
      </>
    );
  }
};

export default LoanHistory;
