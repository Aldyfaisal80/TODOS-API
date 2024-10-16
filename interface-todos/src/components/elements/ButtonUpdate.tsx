import { useMutateUpdateTodos } from "../../features/todo"
import { TodoMutationResponse } from "../../types/Types"
import ButtonPrimary from "./ButtonPrimary"

type UpdateButtonProps = {
    todoID: string
    data: TodoMutationResponse
}

export default function ButtonUpdate( props: UpdateButtonProps, onClick) {
    const Update = false
    const {mutate: todosUpdate} = useMutateUpdateTodos({
        onSuccess: () => {
            console.log('success')
        }
    })

    const handleUpdate = () => {
        todosUpdate( props.todoID, props.data )
    }

    console.log(props.data)
    return (
        <ButtonPrimary
                className="bg-white text-black"
                onClick={handleUpdate}
            >
                {!Update ? 'Update' : (
                    <>
                        <span>Updating...</span>
                    </>
                )}
            </ButtonPrimary>
    )
}
