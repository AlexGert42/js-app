import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { TableContext } from '../context/tadleData/tableContext'

export const CreateCell = () => {
    const alert = useContext(AlertContext)
    const [value, setValue] = useState({
        "id": "",
        "firstName": "",
        "lastName": "",
        "email": "",
        "phone": "",
    })
    const table = useContext(TableContext)

    const clickHendler = e => {
        e.preventDefault()
        alert.show('alert!!!!', 'success')
        table.addRows(value)


        console.log('value', value);
    }


    return (
        <form className="form">
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={(e) => setValue({ ...value, 'id': e.target.value })}
                    value={value['id']}
                    type="number"
                    placeholder="id"
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={(e) => setValue({ ...value, 'firstName': e.target.value })}
                    value={value['firstName']}
                    type="text"
                    placeholder="firstName"
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={(e) => setValue({ ...value, ['lastName']: e.target.value })}
                    value={value['lastName']}
                    type="text"
                    placeholder="lastName"
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={(e) => setValue({ ...value, ['email']: e.target.value })}
                    value={value['email']}
                    type="email"
                    placeholder="email"
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={(e) => setValue({ ...value, ['phone']: e.target.value })}
                    value={value['phone']}
                    type="number"
                    placeholder="phone"
                />
            </div>
            <button type="submit" onClick={clickHendler} className="btn btn-dark">Submit</button>
        </form>
    )
}