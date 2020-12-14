import { MODAL_FLAG, USER_INFO } from '../types'


const hendlers = {
    DEFAULT: state => state,
    [MODAL_FLAG]: (state, { value }) => ({ ...state, flag: value }),
    [USER_INFO]: (state, { user }) => ({ ...state, userInfo: user })
}


export const modalReduser = (state, action) => {
    window.b = state
    const handle = hendlers[action.type] || hendlers.DEFAULT
    return handle(state, action)
}

