import { SHOW_LOADER, ADD_ROW, FETCH_ROW, CHANGE_PAGES, DATA_SELECTION,SEARCH } from '../types'

const hendlers = {
    DEFAULT: state => state,
    [SEARCH]: (state, {value}) => ({...state, rows: state.rows.filter(el => {
    let user = Object.values(el)
    let res = user.filter(e => e == value)
    if (res[0] === value) {
        return el
    } else {
        return null
    }
    })}),

    [DATA_SELECTION]: (state) => ({ ...state, rows: [] }),

    [SHOW_LOADER]: (state) => ({ ...state, loading: true }),

    [ADD_ROW]: (state, { row }) => ({ ...state, rows: [...state.rows, { ...row }] }),
    [FETCH_ROW]: (state, { payload }) => ({ ...state, rows: [...state.rows, ...payload], loading: false }),
    [CHANGE_PAGES]: (state, { payload }) => ({ ...state, page: payload })
}


export const tableReducer = (state, action) => {
    window.a = state
    const handle = hendlers[action.type] || hendlers.DEFAULT
    return handle(state, action)
}

