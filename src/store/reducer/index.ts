export default function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_FOCUS_RIGHT_NOW_TO_TRUE':
      return { ...state, focusRightNow: true };
    case 'CHANGE_FOCUS_RIGHT_NOW_TO_FALSE':
      return { ...state, focusRightNow: false };
    case 'CHANGE_INPUT_OR_NOT_TO_TRUE':
      return { ...state, inputOrNot: true };
    case 'CHANGE_INPUT_OR_NOT_TO_FALSE':
      return { ...state, inputOrNot: false };
    case 'CHANGE_INPUT_FOCUS_OR_HOVER_TO_TRUE':
      return { ...state, inputFocusOrHover: true };
    case 'CHANGE_INPUT_FOCUS_OR_HOVER_TO_FALSE':
      return { ...state, inputFocusOrHover: false };
    case 'CHANGE_NINE_POINT_CLICK_OR_NOT_TO_TRUE':
      return { ...state, ninePointClickOrNot: true };
    case 'CHANGE_NINE_POINT_CLICK_OR_NOT_TO_FALSE':
      return { ...state, ninePointClickOrNot: false };
    case 'CHANGE_HOVER_INPUT_TO_TRUE':
      return { ...state, hoverInput: true };
    case 'CHANGE_HOVER_INPUT_TO_FALSE':
      return { ...state, hoverInput: false };
    case 'CHANGE_NINE_POINT':
      return { ...state, ninePointClickOrNot: !action.dialogOpenOrNot };
    default:
      return state;
  }
}

