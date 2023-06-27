// 출처 : https://www.youtube.com/watch?v=9wrHxqI6zuM

import Counter from "./Components/Counter";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function reducer(state, action) {
  if(action.type === 'up') {
    return {...state, value:state.value}
  }
  return state;
}

const initialState = {value: 0};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
