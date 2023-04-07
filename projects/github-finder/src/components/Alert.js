import React, { useContext } from 'react'
import { AlertContext } from '../context/alertContext'

const Alert = () => {
  const { error } = useContext(AlertContext);
  return (
    error !== null && (
        <div className="container">
            <div className={`alert alert-${error.type}`}>
                { error.msg }
            </div>
        </div>
    )
  )
}

export default Alert