import React, { useContext, useEffect } from 'react'
import { Loader } from '../components/Loader'
import { TableContext } from '../context/tadleData/tableContext'

export const Table = () => {

    const tableClickId = () => {
        console.log('click');
    }
    const tableDblCliskId = () => {
        console.log('dblclick');
    }


    //==========================================================================

    const { loading, rows, addedRow, fetchRows } = useContext(TableContext)
    let resRows = []

    useEffect(() => {
        // eslint-disable-next-line
        fetchRows()
    }, [])


    if (addedRow) {
        resRows = addedRow.concat(rows)
    }




    if (loading) {
        return <Loader />
    } else {
        return (
            <div>
                <table className="table table-bordered">
                    <thead className="thead-inverse">
                        <tr className="thead-dark">
                            <th onClick={tableClickId} onDoubleClick={tableDblCliskId}>id</th>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Email</th>
                            <th>Телефон</th>
                        </tr>
                    </thead>


                    <tbody>


                        {resRows.map((el, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{el['id']}</th>
                                    <td>{el['firstName']}</td>
                                    <td>{el['lastName']}</td>
                                    <td>{el['email']}</td>
                                    <td>{el['phone']}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
                
            </div>
        )
    }
}