import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Linking, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from '@react-native-vector-icons/fontawesome5';

const {width, height} = Dimensions.get('window');

const Details = () => {
  const route = useRoute();
  const {coinId} = route.params;
  const [coinData, setCoinData] = useState(null);
  const [priceData, setPriceData] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const response = await fetch(
          `https://api.coinpaprika.com/v1/coins/${coinId}`,
        );
        const data = await response.json();
        setCoinData(data);
      } catch (e) {
        console.error(e);
      }
    };
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coinpaprika.com/v1/tickers/${coinId}?quotes=KRW`,
        );
        const data = await response.json();
        setPriceData(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCoin();
    fetchPrice();
  }, []);
  return (
    <View>
      {coinData && priceData ? (
        <View>
          <View style={{flexDirection: 'row', margin: '3%', gap: '5%'}}>
            <Image
              style={{
                width: width / 5,
                height: width / 5,
              }}
              source={{uri: coinData.logo}}></Image>
            <View>
              <Text>{coinData.symbol}</Text>
              <Text style={{fontSize: 28, color: 'black'}}>
                {coinData.name}
              </Text>
              <View style={{flexDirection: 'row', gap: '5%'}}>
                {coinData.links.explorer && (
                  <Icon
                    name="info-circle"
                    iconStyle="solid"
                    size={19}
                    color="#1263CE"
                    onPress={() => {
                      Linking.openURL(coinData.links.explorer[0]);
                    }}
                  />
                )}
                {coinData.links.facebook && (
                  <Icon
                    name="facebook"
                    iconStyle="brand"
                    size={18}
                    color="#1877F2"
                    onPress={() => {
                      Linking.openURL(coinData.links.facebook[0]);
                    }}
                  />
                )}
                {coinData.links.reddit && (
                  <Icon
                    name="reddit"
                    iconStyle="brand"
                    size={18}
                    color="#FF4500"
                    onPress={() => {
                      Linking.openURL(coinData.links.reddit[0]);
                    }}
                  />
                )}
                {coinData.links.source_code && (
                  <Icon
                    name="code"
                    iconStyle="solid"
                    size={18}
                    color="#008000"
                    onPress={() => {
                      Linking.openURL(coinData.links.source_code[0]);
                    }}
                  />
                )}
                {coinData.links.website && (
                  <Icon
                    name="atlas"
                    iconStyle="solid"
                    size={18}
                    color="#1263CE"
                    onPress={() => {
                      Linking.openURL(coinData.links.website[0]);
                    }}
                  />
                )}
                {coinData.links.youtube && (
                  <Icon
                    name="youtube"
                    iconStyle="brand"
                    size={18}
                    color="#FF0000"
                    onPress={() => {
                      Linking.openURL(coinData.links.youtube[0]);
                    }}
                  />
                )}
              </View>
            </View>
          </View>
          <Text
            style={{fontSize: 28, color: 'black', margin: '5%', marginTop: 0}}>
            {priceData.quotes.KRW.price} KRW
          </Text>
          <View
            style={{
              width: width / 1.11,
              backgroundColor: '#eaeaea',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 5,
              padding: '3%',
            }}>
            <Text style={{fontSize: 20, color: 'black'}}>Description</Text>
            <Text>{coinData.description}</Text>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <View
              style={{
                width: width / 2.5,
                backgroundColor: '#eaeaea',
                alignItems: 'center',
                borderRadius: 5,
                padding: '3%',
                margin: '5%',
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>Rank</Text>
              <Text>{coinData.rank}</Text>
            </View>
            <View
              style={{
                width: width / 2.5,
                backgroundColor: '#eaeaea',
                alignItems: 'center',
                borderRadius: 5,
                padding: '3%',
                margin: '5%',
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>Started at</Text>
              <Text>{coinData.started_at}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <View
              style={{
                width: width / 2.5,
                backgroundColor: '#eaeaea',
                alignItems: 'center',
                borderRadius: 5,
                padding: '3%',
                margin: '5%',
                marginTop: 0,
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>All Time High</Text>
              <Text style={{textAlign: 'center'}}>
                {priceData.quotes.KRW.ath_price} KRW
              </Text>
            </View>
            <View
              style={{
                width: width / 2.5,
                backgroundColor: '#eaeaea',
                alignItems: 'center',
                borderRadius: 5,
                padding: '3%',
                margin: '5%',
                marginTop: 0,
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>% from ATH</Text>
              <Text>{priceData.quotes.KRW.percent_from_price_ath}%</Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <View style={{flexDirection: 'row', margin: '3%', gap: '5%'}}>
            <View
              style={{
                width: width / 5,
                height: width / 5,
                backgroundColor: '#cccccc',
                borderRadius: 50,
              }}></View>
            <View>
              <Text>Coin Symbol</Text>
              <Text style={{fontSize: 28, color: 'black'}}>Coin Name</Text>
            </View>
          </View>
          <Text
            style={{fontSize: 28, color: 'black', margin: '5%', marginTop: 0}}>
            Coin Price
          </Text>
          <View
            style={{
              width: width / 1.11,
              backgroundColor: '#eaeaea',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 5,
              padding: '3%',
            }}>
            <Text style={{fontSize: 20, color: 'black'}}>Description</Text>
            <Text>Coin Description</Text>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <View
              style={{
                width: width / 2.5,
                backgroundColor: '#eaeaea',
                alignItems: 'center',
                borderRadius: 5,
                padding: '3%',
                margin: '5%',
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>Rank</Text>
              <Text>Coin Rank</Text>
            </View>
            <View
              style={{
                width: width / 2.5,
                backgroundColor: '#eaeaea',
                alignItems: 'center',
                borderRadius: 5,
                padding: '3%',
                margin: '5%',
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>Started at</Text>
              <Text>Coin started_at</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <View
              style={{
                width: width / 2.5,
                backgroundColor: '#eaeaea',
                alignItems: 'center',
                borderRadius: 5,
                padding: '3%',
                margin: '5%',
                marginTop: 0,
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>All Time High</Text>
              <Text>Coin ATH</Text>
            </View>
            <View
              style={{
                width: width / 2.5,
                backgroundColor: '#eaeaea',
                alignItems: 'center',
                borderRadius: 5,
                padding: '3%',
                margin: '5%',
                marginTop: 0,
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>% from ATH</Text>
              <Text>Coin % from ATH</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Details;
