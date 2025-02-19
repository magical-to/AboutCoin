import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import SearchComponent from '../components/SearchComponent';

const width = Dimensions.get('window').width;

const InputView = styled.View`
  background-color: #eaeaea;
  width: ${width / 1.11}px;
  align-self: center;
  border-radius: 15px;
  margin: 5%;
`;

const SectionText = styled.Text`
  font-size: 24px;
  color: black;
  margin: 5%;
`;

const SearchScreen = () => {
  const [searchData, setSearchData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        if (inputValue) {
          const response = await fetch(
            `https://api.coinpaprika.com/v1/search?q=${inputValue}`,
          );
          const data = await response.json();
          setSearchData(data);
          console.log(data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchSearch();
  }, [inputValue]);
  return (
    <ScrollView>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc'}}>
        <InputView>
          <TextInput
            placeholder="Search..."
            onChangeText={v => setInputValue(v)}
          />
        </InputView>
      </View>
      <View>
        <SectionText>Currencies</SectionText>
        <View style={{margin: '5%'}}>
          {searchData && (
            <FlatList
              data={searchData.currencies}
              keyExtractor={item => item.id}
              horizontal
              contentContainerStyle={{paddingRight: '100%'}}
              renderItem={({item}) => {
                return <SearchComponent item={item} />;
              }}
            />
          )}
        </View>
      </View>
      <View>
        <SectionText>Exchanges</SectionText>
        <View style={{margin: '5%'}}>
          {searchData && (
            <FlatList
              data={searchData.exchanges}
              keyExtractor={item => item.id}
              horizontal
              contentContainerStyle={{paddingRight: '100%'}}
              renderItem={({item}) => {
                return <SearchComponent item={item} />;
              }}
            />
          )}
        </View>
      </View>
      <View>
        <SectionText>Icos</SectionText>
        <View style={{margin: '5%'}}>
          {searchData && (
            <FlatList
              data={searchData.icos}
              keyExtractor={item => item.id}
              horizontal
              contentContainerStyle={{paddingRight: '100%'}}
              renderItem={({item}) => {
                return <SearchComponent item={item} />;
              }}
            />
          )}
        </View>
      </View>
      <View>
        <SectionText>People</SectionText>
        <View style={{margin: '5%'}}>
          {searchData && (
            <FlatList
              data={searchData.people}
              keyExtractor={item => item.id}
              horizontal
              contentContainerStyle={{paddingRight: '100%'}}
              renderItem={({item}) => {
                return <SearchComponent item={item} />;
              }}
            />
          )}
        </View>
      </View>
      <View>
        <SectionText>Tags</SectionText>
        <View style={{margin: '5%'}}>
          {searchData && (
            <FlatList
              data={searchData.tags}
              keyExtractor={item => item.id}
              horizontal
              contentContainerStyle={{paddingRight: '100%'}}
              renderItem={({item}) => {
                return <SearchComponent item={item} />;
              }}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};
export default SearchScreen;
