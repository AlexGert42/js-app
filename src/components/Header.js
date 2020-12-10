import React, { useContext } from 'react'
import {TableContext} from '../context/tadleData/tableContext'
import { Navbar } from './Navbar'
import { Alert } from './Alert'

export const Header = () => {
    const { dataSelection } = useContext(TableContext)
    const miniData = (e) => {
        dataSelection(e.target.innerText);
    }


    return (
        <div className="navbar navbar-dark bg-dark fixed-top">
            <div className="navbar-brand">Table Aplication</div>
            <Alert/>

            <button type="button" datatype="1" onClick={miniData} className="btn btn-success">Маленькая База</button>
            <button type="button" datatype="2" onClick={miniData} className="btn btn-success">Большая База</button>

            <div className="justify-content-end row">
                <form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-md-2" type="text" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            
            <Navbar />
            </div>
        </div>
    )
}