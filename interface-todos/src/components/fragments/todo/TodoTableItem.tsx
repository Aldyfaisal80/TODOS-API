import { Todo } from "../../../types/todo"
import ButtonDelete from "../../elements/ButtonDelete"
import ButtonUpdate from "../../elements/ButtonUpdate"
import { ToggleButton } from "../../elements/ToggleButton"

type TodoTableItemProps = {
    todo: Todo
}


export const TodoTableItem = (props: TodoTableItemProps) => {
    return (
        <tr>
            <td className="border px-4 py-2">{props.todo.id}</td>
            <td className="border px-4 py-2">{props.todo.text}</td>
            <td className="border px-4 py-2">
                <ToggleButton todoID="Task 1" className=" hidden" />
            </td>
            <td className="border px-4 py-2 flex justify-center gap-10">
                <ButtonUpdate todoID={props.todo.id} data={props.todo} />
                <ButtonDelete todoID={props.todo.id} />
            </td>
        </tr>
    )
}