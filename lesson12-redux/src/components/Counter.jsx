import {useDispatch, useSelector} from "react-redux";


export default function Counter() {
        const count = useSelector((state) => state.counter.count);
        const dispatch =useDispatch()
    return (
        <>
            <button onClick={() => dispatch({type:'INCREMENT'})}>
                Tang
            </button>
            <div>{count}</div>
            <button onClick={()=> dispatch({type:'DECREMENT'})}>
                Giam
            </button>
            <button onClick={()=>dispatch({type:'RESET'})}>Resest</button>
        </>
    )
    }
