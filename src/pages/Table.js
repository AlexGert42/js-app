import React, { useContext } from 'react'
import { Loader } from '../components/Loader'
import { TableContext } from '../context/tadleData/tableContext'
import { AlertContext } from '../context/alert/alertContext'



export const Table = () => {
    const alert = useContext(AlertContext)

    const tableClick = e => {
        smollToLarge(
            e.target.dataset.id ||
            e.target.dataset.firstname ||
            e.target.dataset.lastname ||
            e.target.dataset.email ||
            e.target.dataset.phone
        )
        alert.show('Сортировка от малого', 'success')
    }

    const tableDblClisk = e => {
        LargeToSmoll(
            e.target.dataset.id ||
            e.target.dataset.firstname ||
            e.target.dataset.lastname ||
            e.target.dataset.email ||
            e.target.dataset.phone
        )
        alert.show('Сортировка от большего', 'success')
    }

    const rowsSelection = row => showFooterRow(row)

    const {
        loading,
        rows,
        page,
        chengePage,
        numberPage,
        numPage,
        smollToLarge,
        LargeToSmoll,
        showFooterRow
    } = useContext(TableContext)

    if (loading) {
        return <div><Loader /></div>
    } else {
        if (rows.length === 0) {
            return null
        } else {
            const count = 50
            const countPages = Math.ceil(rows.length / count)
            return (
                <div>
                    <div className="pages ">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                {Array(countPages).fill().map((el, i) => {
                                    return (
                                        <li className="page-item"
                                            key={i}
                                            className={i === numPage ? "page-link bg-dark text-secondary" : "page-link text-secondary"}
                                            onClick={e => {
                                                let num = e.target.textContent - 1
                                                numberPage(num)
                                                chengePage(num, rows)
                                            }} >
                                            {i + 1}
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                    <table className="table table-bordered table-hover ">
                        <thead className="thead-inverse">
                            <tr className="thead-dark">
                                <th onClick={tableClick} onDoubleClick={tableDblClisk} data-id="id">id</th>
                                <th onClick={tableClick} onDoubleClick={tableDblClisk} data-firstname="firstName">Имя</th>
                                <th onClick={tableClick} onDoubleClick={tableDblClisk} data-lastname="lastName">Фамилия</th>
                                <th onClick={tableClick} onDoubleClick={tableDblClisk} data-email="email">Email</th>
                                <th onClick={tableClick} onDoubleClick={tableDblClisk} data-phone="phone">Телефон</th>
                            </tr>
                        </thead>
                        <tbody>
                            {page.map((el, i) => {
                                return (
                                    <tr onClick={() => rowsSelection(el)} key={i}>
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
                </div>
            )
        }

    }
}