import { useState } from "react"
import axiosInstance from "../../libs/axios"
import { TodoMutationResponse } from "../../types/Types"

export const useMutateUpdateTodos = ({ onSuccess }: { onSuccess: () => void }) => {
    const [state, setState] = useState<TodoMutationResponse>({
        data: null,
        isPending: false,
        isError: null,
    })
    const mutate = async (id: string, data: TodoMutationResponse) => {
        setState(prev => ({ ...prev, isPending: true }))
        try {
            const response = await axiosInstance.put(`/todos/${id}`, { ...data })
            setState({
                data: response.data,
                isPending: false,
            })
            onSuccess()
        } catch (error) {
            setState(prev => ({
                ...prev,
                isPending: false,
                isError: error instanceof Error ? error : new Error('An unknown error occurred')
            }))
        } finally {
            setState(prev => ({
                ...prev,
                isPending: false
            }))
        }
    }
    return {
        ...state,
        mutate
    }
}