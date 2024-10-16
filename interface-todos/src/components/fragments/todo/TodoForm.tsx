import { useForm } from "react-hook-form"
import { useMutateCreateTodos, useMutateUpdateTodos} from "../../../features/todo"
import { CreateTodoInput, createTodoSchema } from "../../../types/todo"
import ButtonPrimary from "../../elements/ButtonPrimary"
import { zodResolver } from "@hookform/resolvers/zod"
import { TodoFormInner } from "./TodoFormInner"
import { useState } from "react"

export const TodoForm = () => {
    const {mutate: todosCreate} = useMutateCreateTodos({ onSuccess: () => {
        console.log('COBA')
    }})

    const [edit , setEdit] = useState()

    const { mutate: todosUpdate } = useMutateUpdateTodos({
        onSuccess: () => {
            console.log(todosUpdate)
        }
    })

    const form = useForm<CreateTodoInput>({
        defaultValues: {
            text: ''
        },
        resolver: zodResolver(createTodoSchema)
    })

    const handleTodoSubmit = (values: CreateTodoInput) => {
        
        if(edit) {
            todosUpdate(edit, values)
        } else {
            todosCreate(values)
        }
    }

    
    return (
        <div className="bg-blue-500 p-5 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <div className="text-white text-lg font-bold mb-4">TODO FORM</div>
            <div className="text-white mb-2">Create or Update your TODO</div>
            <TodoFormInner onSubmit={handleTodoSubmit}
             form={form} 
             values={form.getValues()} 
             onsubmit={edit}/>
                <div className="flex justify-end">
                    <ButtonPrimary className="bg-white" type="submit" form="todo-form"
                    >
                        {!onsubmit ? 'Create': (
                            <>
                                <span>Posting....</span>
                            </>
                        )}
                    </ButtonPrimary>
                </div>
        </div>
    )
}