
import React, { useReducer } from 'react'
import axios from 'axios'
import { TableContext } from './tableContext'
import { tableReducer } from './tableReducer'
import { SHOW_LOADER, FETCH_ROW, ADD_ROW, DATA_SELECTION, CHANGE_PAGES ,SEARCH} from '../types.js'

import { minData, maxDate } from '../url'



export const TableState = ({ children }) => {
    const initialState = {
        rows: [],
        loading: false,
        countRows: 0,

        varable: '',
        page: []
    }

    const [state, dispatch] = useReducer(tableReducer, initialState)


    const showLoader = () => dispatch({ type: SHOW_LOADER })


    const fetchRows = async (url) => {
        let count = 0
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
        count = payload.length
        dispatch({
            type: FETCH_ROW,
            payload,
            count,
        })
    }

    const addRows = (data) => {
        const row = {
            "id": data['id'],
            "firstName": data['firstName'],
            "lastName": data['lastName'],
            "email": data['email'],
            "phone": data['phone'],
        }
        dispatch({
            type: ADD_ROW,
            row
        })
    }

    const chengePage = (i = 0, rows) => {
        const count = 50
        const countPages = Math.ceil(rows.length / count)


        let start = i * count
        let end = start + count
        let pages = rows.slice(start, end)

        dispatch({
            type: CHANGE_PAGES,
            payload: pages

        })
    }

    const dataSelection = (v) => {
        if (v === 'Маленькая База') {
            fetchRows(minData)
        } else if (v === 'Большая База') {
            fetchRows(maxDate)
        }
        dispatch({
            type: DATA_SELECTION,

        })
    }

    const searchRow = (value) => {
        dispatch({
            type: SEARCH,
            value
        })
    }







    return (
        <TableContext.Provider value={{
            showLoader, addRows, fetchRows, dataSelection, chengePage,searchRow,
            loading: state.loading,
            rows: state.rows,
            page: state.page,

            countRows: state.countRows,
            varable: state.varable
        }}>
            {children}
        </TableContext.Provider>
    )
}