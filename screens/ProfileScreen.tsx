import Icon from '@react-native-vector-icons/fontawesome5';
import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import HomeScreen from './HomeScreen';
import HomeStack from './HomeStack';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('screen').width;

const ProfileScreen = () => {
  const navigation = useNavigation();
  const userName = useSelector(state => state.auth.userName);
  const userEmail = useSelector(state => state.auth.userEmail);
  const userPhoto = useSelector(state => state.auth.userPhoto);
  return (
    <View>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc'}}>
        <View style={{margin: '5%', gap: '5%', flexDirection: 'row'}}>
          <Image
            source={{uri: userPhoto}}
            style={{
              width: width / 5,
              height: width / 5,
              borderRadius: width / 5,
            }}
          />
          <View style={{gap: '5%', justifyContent: 'center'}}>
            <Text style={{fontSize: 24}}>{userName}님, 환영합니다.</Text>
            <Text style={{fontSize: 16, color: '#6b6b6b'}}>
              &nbsp;{userEmail}
            </Text>
          </View>
        </View>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc'}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            margin: '5%',
            gap: '5%',
          }}
          onPress={() => navigation.navigate('HomeStack')}>
          <Icon
            name="coins"
            iconStyle="solid"
            size={18}
            style={{marginTop: '1%'}}
          />
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            Top 100 코인 바로 보기
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc'}}>
        <TouchableOpacity
          style={{flexDirection: 'row', margin: '5%', gap: '5%'}}
          onPress={() => navigation.navigate('TagsScreen')}>
          <Icon
            name="list-ol"
            iconStyle="solid"
            size={18}
            style={{marginTop: '1%'}}
          />
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            실시간 코인 카테고리 살펴보기
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc'}}>
        <TouchableOpacity
          style={{flexDirection: 'row', margin: '5%', gap: '5%'}}
          onPress={() => navigation.navigate('ExchangesScreen')}>
          <Icon
            name="list-alt"
            iconStyle="solid"
            size={18}
            style={{marginTop: '1%'}}
          />
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            전세계 모든 거래소 리스트 확인하기
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#cccccc'}}>
        <TouchableOpacity
          style={{flexDirection: 'row', margin: '5%', gap: '5%'}}
          onPress={() => navigation.navigate('SearchScreen')}>
          <Icon
            name="search"
            iconStyle="solid"
            size={18}
            style={{marginTop: '1%'}}
          />
          <Text style={{fontSize: 16, fontWeight: '500'}}>
            원하는 정보 검색하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProfileScreen;
