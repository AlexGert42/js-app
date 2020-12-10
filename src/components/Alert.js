import { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'


export const Alert = () => {
    const { alert, hide } = useContext(AlertContext)

    if (!alert.visible) {
        return null
    } else {
        return (
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`} role="alert">
                <strong>Внимание! </strong>
                {alert.text}
                <button className="close" onClick={hide} type="button"  data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }

}

