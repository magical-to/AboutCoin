import Icon from '@react-native-vector-icons/fontawesome5';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Coin from '../components/Coin';

const HomeScreen = () => {
  const [coinlistData, setCoinlistData] = useState(null);
  useEffect(() => {
    const fetchCoinList = async () => {
      try {
        const response = await fetch('https://api.coinpaprika.com/v1/coins');
        const data = await response.json();
        setCoinlistData(data.slice(0, 100));
        console.log(data.slice(0, 100));
      } catch (e) {
        console.error(e);
      }
    };
    fetchCoinList();
  }, []);
  return (
    <ScrollView contentContainerStyle={{paddingBottom: '25%'}}>
      <View style={{flexDirection: 'row', height: '1%'}}>
        <Image
          source={require('../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png')}
          style={{width: '20%', height: '100%'}}
        />
        <Text
          style={{
            textAlignVertical: 'center',
            fontSize: 24,
            color: 'black',
            fontWeight: '500',
          }}>
          Coin Top 100
        </Text>
      </View>
      {coinlistData ? (
        <View>
          {coinlistData.map(l => {
            return (
              <View key={l.rank}>
                <Coin
                  id={l.id}
                  name={l.name}
                  rank={l.rank}
                  symbol={l.symbol}
                  isNew={l.is_new}
                />
              </View>
            );
          })}
        </View>
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
    </ScrollView>
  );
};
export default HomeScreen;
