import { useDispatch, useSelector } from "react-redux";
import { changeNumber } from "../Store/store";

function Right3() {
    let number = useSelector((state) => state)
    let dispatch = useDispatch();

    return (
        <div>
            <h2>Right3</h2>
            <input type="button" value="+" onClick={dispatch(changeNumber(number))}></input>
        </div>
    )
}

export default Right3;