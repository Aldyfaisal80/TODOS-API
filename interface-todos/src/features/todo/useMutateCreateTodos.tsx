import { useState } from "react"
import { TodoMutationResponse} from "../../types/Types"
import axiosInstance from "../../libs/axios"
import { CreateTodoInput } from "../../types/todo"

export const useMutateCreateTodos = ({ onSuccess }: { onSuccess: () => void }) => {
    const [state, setState] = useState<TodoMutationResponse>({
        data: null,
        isPending: false,
        isError: null,
    })
    const mutate = async (data: CreateTodoInput) => {
        setState(prev => ({ ...prev, loading: true }))
        try {
            const response = await axiosInstance.post(`/todos`, data)
            setState({
                data: response.data.data,
                isPending: false,
            })
            onSuccess()
        } catch (error) {
            setState(prev => ({
                ...prev,
                error: error instanceof Error ? error : new Error('An unknown error occurred')
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