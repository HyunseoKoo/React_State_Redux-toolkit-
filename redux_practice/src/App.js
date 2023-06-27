// 출처 : https://www.youtube.com/watch?v=yjuwpf7VH74

import { useState } from "react";
import Left1 from "./Components/left";
import Right1 from "./Components/right";
import styled from "styled-components";
// redux 사용법 1. createStore를 import 해줍니다 & store는 수정하면 안되기 때문에 store라는 변수에 담아줍니다.
import { createStore } from 'redux';
// redux 사용법 4. redux 3인방을 import 해줍니다. (Provider:어떤 컴포넌트에 state를 제공할지 울타리로 정의하는 것, useSelector:어떤 state를 쓸지 선택, useDispatch:state값을 변경할때 사용, connect)
import { Provider, useSelector, useDispatch } from 'react-redux';

// redux 사용법 2. reducer를 만들어줍니다. reducer는 store 안에 있는 state를 어떻게 바꿀것인가를 결정합니다.
function reducer(currentState, action) {
  if(currentState === undefined) {
    return {
      number: 1
    }
  }
  const newState = {...currentState};
  // redux 사용법 7. dispatch가 전달한 action의 type을 만들어줍니다.
  if(action.type === 'PLUS') {
    newState.number++;
  }
  return newState;
}
// redux 사용법 3. createStore 함수의 인자로 reducer를 넣어줍니다.
const store = createStore(reducer);

function App() {
  const [number, setNumber] = useState(1);
  return (
    <S.Container>
        <h1>Root</h1>
        <S.Grid>
          {/* redux 사용법 5. state를 사용하고 싶은 컴포넌트 바깥쪽에 Provider라는 울타리를 설치합니다.
          이때 store라는 prop으로 createStore를 담아준 store를 전달합니다. */}
          <Provider store={store}>
            <Left1/>
            <Right1/>
          </Provider>
        </S.Grid>
    </S.Container>
  );
}

export default App;

const Container = styled.div`
  border: 5px solid red;
  margin: 10px;

    & > div > div {
    border: 5px solid red;
    margin: 10px;

    & > div {
    border: 5px solid red;
    margin: 10px;

    & > div {
    border: 5px solid red;
    margin: 10px;
  }
  }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const S = {
  Container,
  Grid
}