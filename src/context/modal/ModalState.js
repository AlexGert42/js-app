import React, { useReducer } from 'react'

import { ModalContext } from './modalContext'
import { modalReduser } from './modalReduser'

import { MODAL_FLAG, USER_INFO } from '../types'

export const ModalState = ({ children }) => {
    const initialState = {
        flag: false,
        userInfo: null,
    }
    const [state, dispatch] = useReducer(modalReduser, initialState)

    const modalFlag = value => dispatch({ type: MODAL_FLAG, value })

    const SetUserInfo = user => dispatch({ type: USER_INFO, user })

    return (
        <ModalContext.Provider value={{
            modalFlag,
            SetUserInfo,

            flag: state.flag,
            userInfo: state.userInfo,
        }}>
            {children}
        </ModalContext.Provider>
    )
}