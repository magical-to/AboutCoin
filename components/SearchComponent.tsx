import React from 'react';
import {Text, View} from 'react-native';

const SearchComponent = ({item}) => {
  return (
    <View
      style={{
        backgroundColor: '#cccccc',
        borderRadius: 5,
        padding: '3%',
      }}>
      {item.rank && <Text style={{textAlign: 'center'}}>{item.rank}</Text>}
      {item.symbol && (
        <View
          style={{
            backgroundColor: 'white',
            width: 50,
            alignSelf: 'center',
            borderRadius: 5,
          }}>
          <Text style={{textAlign: 'center', color: 'black'}}>
            {item.symbol}
          </Text>
        </View>
      )}
      <Text style={{fontSize: 20, color: 'black'}}>{item.name}</Text>
    </View>
  );
};

export default SearchComponent;
