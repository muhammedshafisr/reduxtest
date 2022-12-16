import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";

const Counter = ( props ) => {
    const dispatch = useDispatch();
    const [votes, setVotes] = useState(0);

    const handleIncrement = () => {
        dispatch(increment());
        setVotes(votes+1);
    }
    const handleDecrement = () => {
        dispatch(decrement());
        setVotes(votes-1);
    }

    return (
        <div className="Counter" style={{ backgroundColor: "grey", margin: "18px" }}>
            <h2 style={{ textAlign: "center" }}>{ props.name }</h2>
            <h3 style={{ textAlign: "center" }}>{`Votes: ${ votes }`}</h3>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <button onClick={ handleIncrement }> Increment </button>
                <button onClick={ handleDecrement }> Drecrement </button>
            </div>
        </div>
    );
}
 
export default Counter;