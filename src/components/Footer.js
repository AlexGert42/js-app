import React, { useContext } from 'react'
import { TableContext } from '../context/tadleData/tableContext'
import { ModalContext } from '../context/modal/modalContext'
import { Modal } from './Modal'

export const Footer = () => {
    const { showRow } = useContext(TableContext)
    const { modalFlag, SetUserInfo } = useContext(ModalContext)

    if (!showRow) {
        return null
    } else {
        return (
            <div className=" fixed-bottom bg-dark text-secondary ">
                <Modal />

                <div className="row justify-content-center mt-2  mb-2">
                    <div className="col-1 border-right border-secondary" >id: <div>{showRow['id']}</div></div>
                    <div className="col-1 border-right border-secondary" >Имя: <div>{showRow['firstName']}</div></div>
                    <div className="col-1 border-right border-secondary">Фамилия:  <div>{showRow['lastName']}</div></div>
                    <div className="col-2 border-right border-secondary">Email: <div>{showRow['email']}</div></div>
                    <div className="col-2 ">Телефон: <div>{showRow['phone']}</div></div>
                    <button className="btn btn-outline-success col-2" onClick={() => {
                        modalFlag(true)
                        SetUserInfo(showRow)
                    }}
                        type="button">Подробнее
                        </button>
                </div>
            </div>
        )
    }
}