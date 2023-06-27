// rtk 사용법 1. 기존 react-redux와 같이 createStore, Provider 지정까지 동일하게 해줍니다.
// rtk 사용법 2. 큰 store 안에 작은 단위의 store 저장소인 slice를 만들기 위해 createSlice를 import합니다.
import { configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

// rtk 사용법 5. slice 내 각각의 reducer들을 합쳐서 더 큰 단위로 만든 하나의 reducer를 store 저장소에 담아줍니다. 
const store = configureStore({
  reducer: {
    counter1: counterSlice.reducer // counterSlice 안에 있는 reducer들(up, down..)
  }
})

export default store;