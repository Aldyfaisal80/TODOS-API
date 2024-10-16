import { useState } from "react"
import { TodoMutationResponse} from "../../types/Types"
import axiosInstance from "../../libs/axios"

export const useMutateDeleteTodos = ({ onSuccess }: { onSuccess: () => void }) => {
    const [state, setState] = useState<TodoMutationResponse>({
        data: null,
        isPending: false,
        isError: null,
    })
    const mutate = async (id: string) => {
        try {
            const response = await axiosInstance.delete(`/todos/${id}`)
            setState({
                data: response.data.data,
                isPending: false,
            })
            onSuccess()
        } catch (error) {
            setState(prev => ({
                ...prev,
                isError: error instanceof Error ? error : new Error('An unknown error occurred'),
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