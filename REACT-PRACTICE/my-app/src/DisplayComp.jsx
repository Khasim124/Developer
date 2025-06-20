import { connect } from "react-redux";
import * as action from "./store/actions/countAction";

const DisplayComp = ({ countVal, resetVal }) => {
  const reset = () => {
    resetVal(0);
  };
  return (
    <div>
      Current Count is: {countVal}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countVal: state.count.countVal,
});

const mapDispatchToProps = (dispatch) => ({
  resetVal: (data) => dispatch(action.resetVal(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComp);
