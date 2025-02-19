import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';

const TagContainer = styled.View`
  margin: 5%;
  padding: 5%;
  border-radius: 5px;
  background-color: #eaeaea;
`;

const TagsScreen = () => {
  const [tagData, setTagData] = useState(null);
  useEffect(() => {
    const fetchTag = async () => {
      try {
        const response = await fetch('https://api.coinpaprika.com/v1/tags');
        const data = await response.json();
        setTagData(data);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchTag();
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
        All Coin Tags
      </Text>
      {tagData &&
        tagData.map(t => {
          return (
            <TagContainer key={t.id}>
              {t.type === 'functional' && (
                <View
                  style={{
                    backgroundColor: '#1263CE',
                    borderRadius: 5,
                    width: '20%',
                    paddingVertical: '1%',
                  }}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    Functional
                  </Text>
                </View>
              )}
              {t.type === 'technical' && (
                <View
                  style={{
                    backgroundColor: '#13b513',
                    borderRadius: 5,
                    width: '20%',
                    paddingVertical: '1%',
                  }}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    Technical
                  </Text>
                </View>
              )}

              <Text style={{fontSize: 24, color: 'black'}}>{t.name}</Text>
              {t.description ? (
                <Text>{t.description}</Text>
              ) : (
                <Text>No Description.</Text>
              )}
            </TagContainer>
          );
        })}
    </ScrollView>
  );
};
export default TagsScreen;
