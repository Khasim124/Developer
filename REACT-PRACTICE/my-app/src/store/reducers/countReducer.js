import { INC_VAL, RESET_VAL } from '../constants';

const countObject = {
    countVal: 0
};

const countReducer = (state = countObject, action) => {
    switch (action.type) {
        case INC_VAL:
            let c = state.countVal;
            if (action.payload === 'inc')
                c++;
            if (action.payload === 'dec')
                c--;
            return { ...state, countVal: c }

        case RESET_VAL:
            return { ...state, countVal: 0 };

        default:
            return { ...state };
    }
}

export default countReducer;
