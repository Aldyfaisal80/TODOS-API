import { Todo } from "./todo"

export type TodoQueryResponse = {
    data?: Todo[] | null
    isLoading?: boolean
    isError?: Error | null
    refatch?: () => Promise<void>
}

export type  TodoMutationResponse = {
    data ?: Todo | null
    isPending?: boolean
    isError?: Error | null
    variable?: Todo | null
    mutate?: (data: Todo) => Promise<void>
}
