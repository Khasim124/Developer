import {useSelector ,useDispatch} from "react-redux";
import { greencolor,redcolor,bluecolor,blackcolor } from "./PageSlice";

export default function Page1(){
    const color = useSelector((state)=>state.user.color);
    const dispatch = useDispatch();

    return (
      <div>
        <h1>Page1</h1>
        <button type="button" onClick={() => dispatch(greencolor())}>
          Green
        </button>
        <button type="button" onClick={() => dispatch(redcolor())}>
          Red
        </button>
        <button type="button" onClick={() => dispatch(bluecolor())}>
          Blue
        </button>
        <button type="button" onClick={() => dispatch(blackcolor())}>
          Black
        </button>
        <br />
        <br />
        <div 
        style={{backgroundColor : color,
            width : "700px",
            height : "100px",
        }}
        >
            Content
        </div>
      </div>
    );
}