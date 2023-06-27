import {useSelector, useDispatch} from 'react-redux';
import counterSlice from '../counterSlice';

export default function Counter() {
    // rtk 사용법 7. useSelector 사용해서 state 값을 가져옵니다.
    const count = useSelector((state) => {
        console.log(state); // App.js 31번째줄의 "counter1" =>전역 store(slice store X)를 만들고자 configureStore의 인자로 들어간 reducer 키값인 객체 내에 있는 counter1.
        return state.counter1.value;
    });
    // // rtk 사용법 8. 클릭 이벤트가 있을 경우 useDispatch 사용합니다.
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                // rtk 사용법 8. type으로 createSlice에서 지정한 slice의 name 뒤에 '/'를 붙이고 사용할 action type을 정합니다.  
                // dispatch({type:'counterSlice/up', step:2})
                // 다른 방법 ! => reducer에 전달할때 아예 type을 지정하고 인자로 payload를 지정해서 전달해줍니다.
                dispatch(counterSlice.actions.up(2));
            }}>+</button> {count}
        </div>
    );
}