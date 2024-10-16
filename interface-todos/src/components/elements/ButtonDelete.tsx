import { useMutateDeleteTodos } from "../../features/todo";
import ButtonPrimary from "./ButtonPrimary";

type DeleteButtonProps = {
    todoID : string
}
export const ButtonDelete = (props: DeleteButtonProps) => {
    const { todoID } = props
    const Delete = false
    const {mutate: todosDelete} = useMutateDeleteTodos({
        onSuccess: () => {
            console.log('success')
        }
    })

    const handleDelete = () => {
        todosDelete(todoID)
    }
    return (
        <>
            <ButtonPrimary
                className="bg-red-500 text-white"
                onClick={handleDelete}
            >
                {!Delete ? 'Delete' : (
                    <>
                        <span>Deleting...</span>
                    </>
                )}
            </ButtonPrimary>
        </>
    )
}

export default ButtonDelete