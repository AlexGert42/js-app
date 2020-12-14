import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { TableContext } from '../context/tadleData/tableContext'

export const FormRow = () => {
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

    const [idClass, setClassId] = useState(false)
    const [firstNameClass, setClassFirstName] = useState(false)
    const [lastNameClass, setClassLastName] = useState(false)
    const [emailClass, setClassEmail] = useState(false)
    const [phoneClass, setClassPhone] = useState(false)
    const [cityClass, setClassCity] = useState(false)
    const [stateClass, setClassState] = useState(false)
    const [streetAddressClass, setClassStreetAddress] = useState(false)
    const [zipClass, setClassZip] = useState(false)
    const [descriptionClass, setClassDescription] = useState(false)


    const clickHendler = e => {
        e.preventDefault()
        const res = Array(10).fill(false)
        if (value['id'].length >= 3) {
            res[0] = true
            setClassId(false)
        } else {
            setClassId(true)
        }
        if (value['firstName'].trim()) {
            res[1] = true
            setClassFirstName(false)
        } else {
            setClassFirstName(true)
        }
        if (value['lastName'].trim()) {
            res[2] = true
            setClassLastName(false)
        } else {
            setClassLastName(true)
        }
        let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if (regEmail.test(value['email'])) {
            res[3] = true
            setClassEmail(false)
        } else {
            setClassEmail(true)
        }
        let regPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
        if (regPhone.test(value['phone'])) {
            res[4] = true
            setClassPhone(false)
        } else {
            setClassPhone(true)
        }
        if (value['address']['city'].trim()) {
            res[5] = true
            setClassCity(false)
        } else {
            setClassCity(true)
        }
        if (value['address']['state'].trim()) {
            res[6] = true
            setClassState(false)
        } else {
            setClassState(true)
        }
        if (value['address']['streetAddress'].trim()) {
            res[7] = true
            setClassStreetAddress(false)
        } else {
            setClassStreetAddress(true)
        }
        if (value['address']['zip'].length === 5) {
            res[8] = true
            setClassZip(false)
        } else {
            setClassZip(true)
        }
        if (value['description'].trim()) {
            res[9] = true
            setClassDescription(false)
        } else {
            setClassDescription(true)
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
                            className={idClass ? "form-control border-danger" : "form-control"}
                            onChange={(e) => setValue({ ...value, 'id': e.target.value })}
                            value={value['id']}
                            type="number"
                            placeholder="ID"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className={firstNameClass ? "form-control border-danger" : "form-control"}
                            onChange={(e) => setValue({ ...value, 'firstName': e.target.value })}
                            value={value['firstName']}
                            type="text"
                            placeholder="Имя"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className={lastNameClass ? "form-control border-danger" : "form-control"}
                            onChange={(e) => setValue({ ...value, ['lastName']: e.target.value })}
                            value={value['lastName']}
                            type="text"
                            placeholder="Фамилия"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className={emailClass ? "form-control border-danger" : "form-control"}
                            onChange={(e) => setValue({ ...value, ['email']: e.target.value })}
                            value={value['email']}
                            type="email"
                            placeholder="Еmail"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className={phoneClass ? "form-control border-danger" : "form-control"}
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
                            className={cityClass ? "form-control border-danger" : "form-control"}
                            onChange={(e) => setValue({ ...value, ['address']: { ...value['address'], ['city']: e.target.value, } })}
                            value={value['address']['city']}
                            type="text"
                            placeholder="Город"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className={stateClass ? "form-control border-danger" : "form-control"}
                            onChange={(e) => setValue({ ...value, ['address']: { ...value['address'], ['state']: e.target.value, } })}
                            value={value['address']['state']}
                            type="text"
                            placeholder="Страна"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className={streetAddressClass ? "form-control border-danger" : "form-control"}
                            onChange={(e) => setValue({ ...value, ['address']: { ...value['address'], ['streetAddress']: e.target.value, } })}
                            value={value['address']['streetAddress']}
                            type="text"
                            placeholder="Улица"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className={zipClass ? "form-control border-danger" : "form-control"}
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
                            className={descriptionClass ? "form-control border-danger" : "form-control"}
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