import React, { useContext } from 'react'
import AlertContext from '../context/alert/alertContext'

const Alert = () => {
    const {alert} = useContext(AlertContext)
    return (
            alert !== null && (
                <div className="container my-2">
                    <div className={`alert alert-${alert.type} alert-dismissible fade show`}>
                        {alert.msg}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            )
    )
}

export default Alert
