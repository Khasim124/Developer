import { INC_VAL, RESET_VAL } from '../constants';

export const countVal = (payload) => ({ type: INC_VAL, payload: payload });
export const resetVal = (payload) => ({ type: RESET_VAL, payload: payload });