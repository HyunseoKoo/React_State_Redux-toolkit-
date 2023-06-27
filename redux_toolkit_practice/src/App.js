// 출처 : https://www.youtube.com/watch?v=9wrHxqI6zuM

// import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './store';
import Counter from './Components/Counter';

// [ react-redux 코드 ]
// function reducer(state, action) {
//   if(action.type === 'up') {
//     return {...state, value:state.value + action.step}
//   }
//   return state;
// }

// const initialState = {value: 0}; // 컴포넌트에서 사용할 state의 초기값

// // 이렇게 createStore 저장소에 reducer와 initialState 2개 인자 전달 가능 (!) 
// // initialState는 컴포넌트에서 사용할 useSelector가 인자로 받을 콜백함수의 state가 됨 (!)
// const store = createStore(reducer, initialState);

function App() {
  return (
    // rtk 사용법 6. Provider의 prop으로 store를 설정해줍니다.
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
