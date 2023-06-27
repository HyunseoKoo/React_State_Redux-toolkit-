import { useSelector } from "react-redux";

function Left3() {
    // redux 사용법 4. useSelector로 redux가 관리하는 state와 무선 연결해줍니다. 인자로 받는 함수를 만들어줍니다.
    const number = useSelector((state) => state.number);
    return (
        <div>
            {/* redux 사용법 5. useSelector로 찾은 값을 (담은 변수를) 나타내줍니다. */}
            <h2>Left3 : {number}</h2>
        </div>
    )
}

export default Left3;