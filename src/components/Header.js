import React, { useContext, useState } from 'react'
import { TableContext } from '../context/tadleData/tableContext'
import { AlertContext } from '../context/alert/alertContext'
import { Navbar } from './Navbar'
import { Alert } from './Alert'

export const Header = () => {
    const alert = useContext(AlertContext)
    const { dataSelection, searchRow, chengePage, rows} = useContext(TableContext)
    const miniData = (e) => {
      
        dataSelection(e.target.name);
        chengePage(0, rows)
    }

    const [value, setValue] = useState('')

    const clickHendler = e => {
        e.preventDefault()
        if (value.trim()) {
            searchRow(value)
            setValue('')
            alert.hide()
        } else {
            alert.show('Введите данные для поиска','danger')
        }
    }

    return (
        <div className="navbar navbar-dark bg-dark fixed-top ">
            <div className="justify-content-start align-items-start col-6">
                <div className="navbar-brand ">Table Aplication</div>
                <Alert />
            </div>
            <div className="justify-content-end align-items-center col-6">
                <div className="row">  
                        <button type="button" datatype="1" onClick={miniData} name="mini" className="btn btn-outline-success mr-md-2">Маленькая База</button>
                        <button type="button" datatype="2" onClick={miniData} name="big" className="btn btn-outline-success mr-md-2">Большая База</button>
                    <form className="form-inline mt-2 mt-md-0 ">
                            <input className="form-control mr-md-2"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                            <button className="btn btn-outline-success my-2 my-sm-0 mr-md-2" onClick={clickHendler} type="submit">Поиск</button>
                        </form>
                        <Navbar />
                    </div>

                </div>
            </div>
    )
}