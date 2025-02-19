import {configureStore, createSlice} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {MMKV} from 'react-native-mmkv';
// MMKV 인스턴스 생성
const storage = new MMKV();

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogined: storage.getBoolean('isLogined') || false,
    userName: storage.getString('userName') || '이름 정보가 없습니다',
    userEmail: storage.getString('userEmail') || '이메일 정보가 없습니다',
    userPhoto: storage.getString('userPhoto') || '사진 정보가 없습니다',
  },
  reducers: {
    Login: state => {
      storage.set('isLogined', true);
      state.isLogined = true; // 로그인 상태 변경
    },
    Logout: state => {
      storage.set('isLogined', false);
      state.isLogined = false; // 로그아웃 상태 변경
    },
    SetInfo: (state, action) => {
      storage.set('userName', action.payload.userName);
      state.userName = action.payload.userName;
      storage.set('userEmail', action.payload.userEmail);
      state.userEmail = action.payload.userEmail;
      storage.set('userPhoto', action.payload.userPhoto);
      state.userPhoto = action.payload.userPhoto;
    },
  },
});

// Redux 스토어 설정
export const store = configureStore({
  reducer: {auth: authSlice.reducer},
});

// 액션 내보내기
export const {Login, Logout, SetInfo} = authSlice.actions;
