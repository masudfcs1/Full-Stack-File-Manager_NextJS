import React, { useContext, useEffect } from 'react'
import { ShowToastContext } from './ShowToastContext'

const Toast = ({ message }) => {
    const { showToastMsg, setShowToastMsg } = useContext(ShowToastContext)

    useEffect(() => {
        setInterval(() => {
            setShowToastMsg(null)
        }, 3000)
    }, [showToastMsg])
    return (
        <div className="toast toast-first">
            <div className="alert alert-success">
                <span>{message} </span>
            </div>
        </div>
    )
}

export default Toast