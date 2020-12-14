
import React, { useReducer } from 'react'
import axios from 'axios'
import { TableContext } from './tableContext'
import { tableReducer } from './tableReducer'
import { SHOW_LOADER, FETCH_ROW, ADD_ROW, DATA_SELECTION, CHANGE_PAGES, SEARCH, NUM_PAGE, SORT_CLICK, SORT_DBLCLICK, SHOW_ROW } from '../types.js'

import { minData, maxDate } from '../url'



export const TableState = ({ children }) => {
    const initialState = {
        rows: [],
        loading: false,

        page: [],
        numPage: 0,

        showRow: null,
    }
    const [state, dispatch] = useReducer(tableReducer, initialState)

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const smollToLarge = value => dispatch({ type: SORT_CLICK, value })

    const LargeToSmoll = value => dispatch({ type: SORT_DBLCLICK, value })

    const showFooterRow = row => dispatch({ type: SHOW_ROW, row })

    const addRows = row => dispatch({ type: ADD_ROW, row })

    const numberPage = value => dispatch({ type: NUM_PAGE, value })

    const fetchRows = async (url) => {
        let res = []
        let payload = []
        if (!url) {
            return null
        } else {
            showLoader()
            res = await axios.get(url)
            payload = Object.keys(res.data).map(key => {
                return {
                    ...res.data[key],
                }
            })
        }
        dispatch({
            type: FETCH_ROW,
            payload,
        })
    }

    const chengePage = (num = 0, rows) => {
        const count = 50

        let start = num * count
        let end = start + count
        let page = rows.slice(start, end)

        dispatch({
            type: CHANGE_PAGES,
            payload: page,
        })
    }

    const dataSelection = (v) => {
        if (v === 'Маленькая База') {
            fetchRows(minData)
        } else if (v === 'Большая База') {
            fetchRows(maxDate)
        }
        dispatch({ type: DATA_SELECTION })
    }

    const searchRow = (value) => {
        dispatch({
            type: SEARCH,
            value
        })
    }

    return (
        <TableContext.Provider value={{
            showLoader,
            addRows,
            fetchRows,
            dataSelection,
            chengePage,
            searchRow,
            numberPage,
            smollToLarge,
            LargeToSmoll,
            showFooterRow,

            loading: state.loading,
            rows: state.rows,
            page: state.page,
            numPage: state.numPage,
            showRow: state.showRow,
        }}>
            {children}
        </TableContext.Provider>
    )
}