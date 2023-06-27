// rtk 사용법 4. 각각의 slice를 담는 store를 만드는 configureStore를 import 해줍니다.
import {createSlice} from '@reduxjs/toolkit';

// rtk 사용법 3. createSlice로 slice의 이름과 초기값, reducers('s' 주의!)를 만들어 줍니다.
export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {value:0},
  reducers: {
    // reducers라는 키의 값으로 또다시 객체를 지정해줍니다.
    // 그 안에는 action type별 메서드들이 들어갑니다.
    up:(state, action) => {
      state.value = state.value + action.payload;
    },
    down:(state, action) => {
      state.value = state.value - action.step;
    }
  }
}
);

export default counterSlice;