import { createStore } from 'redux';
import reducer from './reducer/index'; // 导入 reducer

export interface initialStateType {
    focusRightNow: boolean,
    inputOrNot: boolean,
    ninePointClickOrNot: boolean,
    inputFocusOrHover: boolean,
    hoverInput: boolean,
}

const initialState: initialStateType = {
    focusRightNow: false,
    inputOrNot: false,
    ninePointClickOrNot: false,
    inputFocusOrHover: false,
    hoverInput: false,
};

const store = createStore(reducer, initialState);

export default store;