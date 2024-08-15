import { createStore } from 'redux';
import reducer from './reducer/index.ts'; // 导入 reducer

const initialState = {
    focusRightNow: false,
    inputOrNot: false,
    ninePointClickOrNot: false,
    inputFocusOrHover: false,
    hoverInput: false,
};

const store = createStore(reducer, initialState);

export default store;