import { useDispatch } from "react-redux";

function Right3() {
    // redux 사용법 5. onClick 이벤트를 사용하기 위해서 action을 다룰수 있는(? 내피셜) useDispatch를 사용합니다.
    const dispatch = useDispatch(); 
    return (
        <div>
            <h2>Right3</h2>
            <input type="button" value="+" onClick={() => {
                // redux 사용법 6. useDispatch를 사용해서 dispatch를 가져옵니다.
                dispatch({type: 'PLUS'});
            }}></input>
        </div>
    )
}

export default Right3;