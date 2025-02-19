import React, {useEffect, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const CoinContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin: 3%;
  background-color: #eaeaea;
  padding: 2%;
  gap: 5%;
  border-radius: 5px;
`;

const Coin = ({name, rank, symbol, isNew, id}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('Details', {coinId: id});
  };
  return (
    <View>
      {isNew && (
        <View style={{marginTop: '3%', marginBottom: '-3%', marginLeft: '3%'}}>
          <Text style={{fontSize: 16, color: 'red'}}>New!</Text>
        </View>
      )}
      <CoinContainer onPress={() => handlePress()}>
        <Text style={{fontSize: 16, textAlignVertical: 'center'}}>{rank}</Text>
        <Image
          source={{uri: `https://static.coinpaprika.com/coin/${id}/logo.png`}}
          style={{width: width / 10, height: width / 10}}
        />
        <View>
          <Text style={{fontSize: 12}}>{symbol}</Text>
          <Text style={{color: 'black', fontSize: 16}}>{name}</Text>
        </View>
      </CoinContainer>
    </View>
  );
};

export default Coin;
