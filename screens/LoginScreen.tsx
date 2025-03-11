import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Login, SetInfo} from '../Store';
import Icon from '@react-native-vector-icons/fontawesome5';
import {NavigationContainer} from '@react-navigation/native';
import ExchangesScreen from './ExchangesScreen';
import HomeStack from './HomeStack';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import TagsScreen from './TagsScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileHome from '../Move/ProfileMove';

const Tab = createBottomTabNavigator();

const LoginScreen = () => {
  const [userInfo, setUserInfo] = useState(undefined);
  const isLogined = useSelector(state => state.auth.isLogined);
  const dispatch = useDispatch();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '519181576653-cjs3nq90v6bsdee7d72mlkkov3f70753.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        dispatch(Login());
        dispatch(
          SetInfo({
            userName: response.data.user.name,
            userEmail: response.data.user.email,
            userPhoto: response.data.user.photo,
          }),
        );
        setUserInfo(response.data);
      } else {
        console.log('Canceled sign in');
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            console.error('Sign in in progress');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.error('Play services not available');
            break;
          default:
            console.error(error.code + ': ' + error.message);
        }
      } else {
        console.error(error);
      }
    }
  };

  console.log(isLogined);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {isLogined ? (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Home">
            <Tab.Screen
              name="Exchanges"
              component={ExchangesScreen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <Icon
                      name="exchange-alt"
                      iconStyle="solid"
                      color={focused ? '#1263CE' : '#a0a0a0'}
                      size={16}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Tags"
              component={TagsScreen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <Icon
                      name="tags"
                      iconStyle="solid"
                      color={focused ? '#1263CE' : '#a0a0a0'}
                      size={16}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Home"
              component={HomeStack}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <Icon
                      name="home"
                      iconStyle="solid"
                      color={focused ? '#1263CE' : '#a0a0a0'}
                      size={16}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <Icon
                      name="search"
                      iconStyle="solid"
                      color={focused ? '#1263CE' : '#a0a0a0'}
                      size={16}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileHome}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <Icon
                      name="user"
                      iconStyle="solid"
                      color={focused ? '#1263CE' : '#a0a0a0'}
                      size={16}
                    />
                  );
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer> // 로그인 후 보여줄 화면
      ) : (
        <View>
          <Image
            source={require('../android/app/src/main/res/drawable/launch_screen.png')}
            style={{width: '87%', height: '87%', alignSelf: 'center'}}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#eeeeee',
              padding: '5%',
              margin: '5%',
              borderRadius: 10,
            }}
            onPress={signIn}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png',
                }}
                style={{
                  width: '7.5%',
                  height: '127.5%',
                  marginTop: '-0.5%',
                  marginLeft: '2.5%',
                  marginRight: '2.5%',
                }}
              />
              <Text style={{fontSize: 18}}>Login with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default LoginScreen;
