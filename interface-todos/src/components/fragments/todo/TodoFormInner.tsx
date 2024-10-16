type TodoFormInnerProps = {
    onSubmit: (values: CreateTodoInput) => void
    form: UseFormReturn<CreateTodoInput>
    update: UseFormReturn<UpdateTodoInput>
}
import { UseFormReturn } from 'react-hook-form';
import { CreateTodoInput, UpdateTodoInput } from '../../../types/todo';

export const TodoFormInner = (props: TodoFormInnerProps) => {
    const { form, onSubmit } = props
    return (
        <form id="todo-form" onSubmit={form.handleSubmit(onSubmit)}>
            <div>
                <p className="mb-2 font-semibold">TODO</p>
                <input
                    className="w-full p-2 border-2 border-solid border-black mb-4 shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:translate-y-2 hover:translate-x-2 hover:shadow-none "
                    type="text"
                    placeholder="Enter your TODO"
                    {...form.register('text')}
                    defaultValue={form.getValues('text')}
                />
                <p className='text-red-500 text-xl'>{form.formState.errors.text?.message}</p>
            </div>
        </form>
    )
}