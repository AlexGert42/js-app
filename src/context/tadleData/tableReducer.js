import { SHOW_LOADER, ADD_ROW, FETCH_ROW, DATA_SELECTION } from '../types'

const hendlers = {
    DEFAULT: state => state,
    // [DATA_SELECTION]: (state, flag) => ({...state, varable: res}),

    [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
    [ADD_ROW]: (state, { row }) => ({ ...state, addedRow: [...state.addedRow, {...row}] }),
    [FETCH_ROW]: (state, { payload}) => ({ ...state, rows: payload, loading: false }),
    
}


export const tableReducer = (state, action) => {
    window.a = state
    const handle = hendlers[action.type] || hendlers.DEFAULT
    return handle(state, action)
}

