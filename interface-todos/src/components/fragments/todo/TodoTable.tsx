import { useQueryTodos } from "../../../features/todo"
import { Todo } from "../../../types/todo"
import { TodoTableItem } from "./TodoTableItem"
// import { TodoTableItem } from "./TodoTableItem"

const renderElements = (todos: Todo[]) => todos.map(todo => <TodoTableItem key={todo.id} todo={todo}/>)

export const TodoTable = () => {
    const {data: todosData, isLoading: todoLoading} = useQueryTodos({
        onSuccess: () => {
            console.log('success')
        }
    })

    console.log(todosData)
    return (
        <>
            <div className="mt-8 rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-blue-500 text-white">
                <div className="overflow-auto max-h-[530px] w-full">
                    <table className="w-full h-auto">
                        <thead>
                            <tr className='sticky top-0'>
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">TODO</th>
                                <th className="px-4 py-2">STATUS</th>
                                <th className="px-4 py-2">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {!todoLoading && todosData && renderElements(todosData)} 
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}