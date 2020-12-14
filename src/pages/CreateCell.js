import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { TableContext } from '../context/tadleData/tableContext'

export const CreateCell = () => {
    const alert = useContext(AlertContext)
    const table = useContext(TableContext)
    const [value, setValue] = useState({
        "id": "",
        "firstName": "",
        "lastName": "",
        "email": "",
        "phone": "",
        "description": "",
        "address": {
            "city": "",
            "state": "",
            "streetAddress": "",
            "zip": "",
        }
    })

    // const [dirty, setDirty] = useState(false)
    // const [error, setError] = useState('Поле не может быть пустым')

    const clickHendler = e => {
        e.preventDefault()
        const res = Array(10).fill(false)
        if (value['id'].length >= 3) {
            res[0] = true
        }
        if (value['firstName'].trim()) {
            res[1] = true
        }
        if (value['lastName'].trim()) {
            res[2] = true
        }
        let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if (regEmail.test(value['email'])) {
            res[3] = true
        }
        let regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
        if (regPhone.test(value['phone'])) {
            res[4] = true
        }
        if (value['address']['city'].trim()) {
            res[5] = true
        }
        if (value['address']['state'].trim()) {
            res[6] = true
        }
        if (value['address']['streetAddress'].trim()) {
            res[7] = true
        }
        if (value['address']['zip'].length === 5) {
            res[8] = true
        }
        if (value['description'].trim()) {
            res[9] = true
        }

        if (res[0] && res[1] && res[2] && res[3] && res[4] && res[6] && res[6] && res[7] && res[8] && res[9]) {
            alert.show('Данные успешно добавленны', 'success')
            table.addRows(value)
            setValue({
                "id": "",
                "firstName": "",
                "lastName": "",
                "email": "",
                "phone": "",
                "description": "",
                "address": {
                    "city": "",
                    "state": "",
                    "streetAddress": "",
                    "zip": "",
                }
            })
        } else {
            alert.show('Заполните пустые поля', 'danger')
        }
    }

    

    return (
        <div>
            <div className="discription row align-items-center justify-content-center">
                <h2 className="col">Основная Информация</h2>
                <h2 className="col">Адресная Информация</h2>
                <h2 className="col">Описание</h2>
            </div>
            <form className="form row align-items-start">
                <div className="col">
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={(e) => setValue({ ...value, 'id': e.target.value })}
                            value={value['id']}
                            type="number"
                            placeholder="ID"
                            // onBlur={BlurHendler}
                            // name="id"
                            // required
                        />
                    </div>
                    <div className="form-group">

                        <input
                            className="form-control"
                            onChange={(e) => setValue({ ...value, 'firstName': e.target.value })}
                            value={value['firstName']}
                            type="text"
                            placeholder="Имя"
                            // onBlur={BlurHendler}
                            // name="firstName"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={(e) => setValue({ ...value, ['lastName']: e.target.value })}
                            value={value['lastName']}
                            type="text"
                            placeholder="Фамилия"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={(e) => setValue({ ...value, ['email']: e.target.value })}
                            value={value['email']}
                            type="email"
                            placeholder="Еmail"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={(e) => setValue({ ...value, ['phone']: e.target.value })}
                            value={value['phone']}
                            type="number"
                            placeholder="Телефон"
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={(e) => setValue({ ...value, ['address']: { ...value['address'], ['city']: e.target.value, } })}
                            value={value['address']['city']}
                            type="text"
                            placeholder="Город"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={(e) => setValue({ ...value, ['address']: { ...value['address'], ['state']: e.target.value, } })}
                            value={value['address']['state']}
                            type="text"
                            placeholder="Страна"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={(e) => setValue({ ...value, ['address']: { ...value['address'], ['streetAddress']: e.target.value, } })}
                            value={value['address']['streetAddress']}
                            type="text"
                            placeholder="Улица"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={(e) => setValue({ ...value, ['address']: { ...value['address'], ['zip']: e.target.value, } })}
                            value={value['address']['zip']}
                            type="number"
                            placeholder="Индекс"
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            onChange={(e) => setValue({ ...value, ['description']: e.target.value })}
                            value={value['description']}
                            placeholder="Описание"
                        />
                    </div>
                    <button type="submit" onClick={clickHendler} className="btn btn-dark ">Submit</button>
                </div>
                
            </form>
        </div>
    )
}