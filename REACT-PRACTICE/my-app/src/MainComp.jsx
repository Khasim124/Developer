import * as action from "./store/actions/countAction";
import { connect } from "react-redux";
const MainComp = ({ countVal }) => {
  const incCount = () => {
    countVal("inc");
  };

  const decCount = () => {
    countVal("dec");
  };
  return (
    <div>
      <button onClick={incCount}>Increment</button>
      <button onClick={decCount}>Decrement</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  countVal: (data) => dispatch(action.countVal(data)),
});

export default connect(null, mapDispatchToProps)(MainComp);
