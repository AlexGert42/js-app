import React, { useContext } from 'react'
import { ModalContext } from '../context/modal/modalContext'


export const Modal = () => {
    const { flag, modalFlag, userInfo } = useContext(ModalContext)
    if (userInfo === null) {
        return null
    } else {
        return (
            <div className={flag ? "my-modal__ovelay active" : "my-modal__ovelay"} onClick={() => modalFlag(false)} >

                <div className="my-modal__window" onClick={e => e.stopPropagation()}>
                    <div className="my-modal__header">
                        <div className="my-modal__title ">Дополнительная информация: {userInfo['firstName']}</div>
                        <div className="my-modal__close" onClick={() => modalFlag(false)}>&times;</div>
                    </div>
                    <div className="my-modal__main row   align-items-center">
                        <ul class="list-group list-group-flush col-6">
                            <li class="list-group-item">Город: {userInfo['address']['city']}</li>
                            <li class="list-group-item">Страна: {userInfo['address']['state']}</li>
                            <li class="list-group-item">Улица: {userInfo['address']['streetAddress']}</li>
                            <li class="list-group-item">Индекс: {userInfo['address']['zip']}</li>
                        </ul>
                        <div className="col-6">
                            <h3>Описание</h3>
                            <p>{userInfo['description']}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}