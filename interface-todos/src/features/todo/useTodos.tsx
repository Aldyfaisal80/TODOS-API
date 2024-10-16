import { useEffect, useState } from "react"
import axiosInstance from "../../libs/axios"

export const useTodos = () => {
    const [state, setState] = useState({
        data: [],
        loading: false,
        error: null,
        message: '',
        status: ''
    })

    useEffect(() => {
        setState(prev => ({ ...prev, loading: true }))
        axiosInstance.get('/todos').then(response => {
            setState({
                data: { ...response.data },
                loading: false,
                error: null,
                message: response.data.message,
                status: response.data.status
            })
        }).catch(error => {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error,
            }))
        })
    }, [])
    return state
}