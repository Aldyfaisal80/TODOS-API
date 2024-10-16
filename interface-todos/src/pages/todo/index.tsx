import { TodoForm, TodoTable } from "../../components/fragments/todo";

export default function Todo() {
  return (
    <div className="min-h-screen min-w-screen p-10">
        <div>
          <TodoForm />
        </div>
        <div className="">
          <TodoTable />
        </div>
    </div>
  )
}
