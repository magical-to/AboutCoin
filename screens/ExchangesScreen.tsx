import Icon from '@react-native-vector-icons/fontawesome5';
import React, {useEffect, useState} from 'react';
import {Linking, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';

const ExchangeContainer = styled.View`
  margin: 5%;
  padding: 5%;
  border-radius: 5px;
  background-color: #eaeaea;
`;

const ExchangesScreen = () => {
  const [exchangeData, setExchangeData] = useState(null);
  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const response = await fetch(
          'https://api.coinpaprika.com/v1/exchanges',
        );
        const data = await response.json();
        setExchangeData(data);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchExchange();
  }, []);
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 28,
          color: 'black',
          textAlign: 'center',
          margin: '5%',
          fontWeight: '500',
        }}>
        All Coin Exchanges
      </Text>
      {exchangeData &&
        exchangeData.map(e => {
          return (
            <ExchangeContainer key={e.id}>
              {e.active === true ? (
                <View
                  style={{
                    backgroundColor: '#12ce25',
                    borderRadius: 5,
                    width: '20%',
                    paddingVertical: '1%',
                  }}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    Active
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    backgroundColor: '#bc1717',
                    borderRadius: 5,
                    width: '20%',
                    paddingVertical: '1%',
                  }}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    Passive
                  </Text>
                </View>
              )}
              <View
                style={{
                  flexDirection: 'row',
                  gap: '2.5%',
                }}>
                <Text style={{fontSize: 24, color: 'black'}}>{e.name}</Text>
                {e.links && e.links.website && (
                  <Icon
                    name="atlas"
                    iconStyle="solid"
                    size={18}
                    style={{marginTop: '2%'}}
                    color={'#1263CE'}
                    onPress={() => Linking.openURL(e.links.website[0])}
                  />
                )}
                {e.links && e.links.twitter && (
                  <Icon
                    name="twitter"
                    iconStyle="brand"
                    size={18}
                    style={{marginTop: '2%'}}
                    color={'#1DA1F2'}
                    onPress={() => Linking.openURL(e.links.twitter[0])}
                  />
                )}
              </View>
              {e.description ? (
                <Text>{e.description}</Text>
              ) : (
                <Text>No Description.</Text>
              )}
            </ExchangeContainer>
          );
        })}
    </ScrollView>
  );
};
export default ExchangesScreen;
