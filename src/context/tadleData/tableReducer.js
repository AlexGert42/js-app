import {
    SHOW_LOADER,
    ADD_ROW,
    FETCH_ROW,
    CHANGE_PAGES,
    DATA_SELECTION,
    SEARCH,
    NUM_PAGE,
    SORT_CLICK,
    SORT_DBLCLICK,
    SHOW_ROW,
} from '../types'

const hendlers = {
    DEFAULT: state => state,
    [SEARCH]: (state, { value }) => ({
        ...state, page: state.rows.filter(el => {
            let user = Object.values(el)
            let res = user.filter(e => e == value)
            if (res[0] === value) {
                return el
            } else {
                return null
            }
        })
    }),

    [SHOW_ROW]: (state, { row }) => ({ ...state, showRow: row }),

    [DATA_SELECTION]: (state) => ({ ...state, rows: [] }),

    [SHOW_LOADER]: (state) => ({ ...state, loading: true }),

    [ADD_ROW]: (state, { row }) => ({ ...state, page: [{ ...row }, ...state.page,] }),

    [FETCH_ROW]: (state, { payload }) => ({ ...state, rows: [...state.rows, ...payload], loading: false }),

    [CHANGE_PAGES]: (state, { payload }) => ({ ...state, page: payload, }),

    [NUM_PAGE]: (state, { value }) => ({ ...state, numPage: value }),

    [SORT_CLICK]: (state, { value }) => ({
        ...state, page: state.page.sort((a, b) => {
            if (a[value] > b[value]) {
                return 1
            }
            if (a[value] < b[value]) {
                return -1
            }
            return 0
        })
    }),

    [SORT_DBLCLICK]: (state, { value }) => ({
        ...state, page: state.page.sort((a, b) => {
            if (a[value] < b[value]) {
                return 1
            }
            if (a[value] > b[value]) {
                return -1
            }
            return 0
        })
    }),
}


export const tableReducer = (state, action) => {
    window.a = state
    const handle = hendlers[action.type] || hendlers.DEFAULT
    return handle(state, action)
}

