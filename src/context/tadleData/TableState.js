
import React, { useReducer } from 'react'
import axios from 'axios'
import { TableContext } from './tableContext'
import { tableReducer } from './tableReducer'
import { SHOW_LOADER, FETCH_ROW ,ADD_ROW,DATA_SELECTION} from '../types.js'

import {minData, maxDate} from '../url'



export const TableState = ({ children }) => {
    const initialState = {
        rows: [],
        loading: false,
        addedRow: [],

        varable: '',
    }

    const [state, dispatch] = useReducer(tableReducer, initialState)
    const showLoader = () => dispatch({ type: SHOW_LOADER })

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
            type:FETCH_ROW,
            payload,
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
            type:ADD_ROW,
            row
        }) 
    }

    const dataSelection = (v) => {
       
        if (v === 'Маленькая База') {
            fetchRows(minData)
        } else if (v === 'Большая База') {
            fetchRows(maxDate)
        }

        // dispatch({
        //     type:DATA_SELECTION,

        // })
    }


    return (
        <TableContext.Provider value={{
            showLoader, addRows, fetchRows, dataSelection,
            loading: state.loading,
            rows: state.rows,
            addedRow: state.addedRow,
            // varable: state.varable
        }}>
            {children}
        </TableContext.Provider>
    )
}