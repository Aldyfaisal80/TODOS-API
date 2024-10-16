// import { z } from 'zod';
// import ButtonPrimary from './components/elements/ButtonPrimary';
// import { useMutateCreateTodos, useMutateDeleteTodos, useMutateUpdateTodos, useQueryTodos } from './features/todo';
// import { useForm } from 'react-hook-form';
// import { useState } from 'react';

// export default function App() {
//     const { data, error, loading } = useQueryTodos();
//     const { mutate: createTodo } = useMutateCreateTodos();
//     const { mutate: deleteTodo } = useMutateDeleteTodos();
//     const { mutate: updateTodo } = useMutateUpdateTodos();

//     const [edit, setEdit] = useState<{ id: string | null; text: string }>({ id: null, text: '' });

//     const CreateSchema = z.object({
//         text: z.string()
//             .min(1, { message: 'Please enter a valid Todo input' })
//             .max(100, { message: 'Text is too long' }),
//     });

//     type CreateSchemaType = z.infer<typeof CreateSchema>;

//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm<CreateSchemaType>({
//         defaultValues: {
//             text: '',
//         },
//     });

//     const onSubmit = (data: CreateSchemaType) => {
//         if (edit.id) {
//             updateTodo(edit.id, data.text); 
//         } else {
//             createTodo(data);
//         }
//         reset();
//         setEdit({ id: null, text: '' }); // Reset edit 
//     };

//     const handleEdit = (todoId: string, todoText: string) => {
//         setEdit({ id: todoId, text: todoText });
//     };

//     const handleDelete = (id: string) => {
//         deleteTodo(id);
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error loading TODOs</div>;
//     }

//     return (
//         <div className="min-h-screen min-w-screen p-10">
//             <div className="bg-blue-500 p-5 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,1)]">
//                 <div className="text-white text-lg font-bold mb-4">TODO FORM</div>
//                 <div className="text-white mb-2">Create or Update your TODO</div>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div>
//                         <p className="mb-2 font-semibold">TODO</p>
//                         <input
//                             className="w-full p-2 border-2 border-solid border-black mb-4 shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out hover:translate-y-2 hover:translate-x-2 hover:shadow-none"
//                             type="text"
//                             placeholder="Enter your TODO"
//                             {...register('text')}
//                             value={edit.text}
//                             onChange={(e) => setEdit({ ...edit, text: e.target.value })}
//                         />
//                         {errors.text && <p className="text-red-500">{errors.text.message}</p>}
//                     </div>
//                     <div className="flex justify-end">
//                         <ButtonPrimary className="bg-white" type="submit">
//                             {edit.id ? 'Update' : 'Create'}
//                         </ButtonPrimary>
//                     </div>
//                 </form>
//             </div>

//             <div className="mt-8 rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-blue-500 text-white">
//                 <div className="overflow-auto max-h-[530px] w-full">
//                     <table className="w-full h-auto">
//                         <thead>
//                             <tr className='sticky top-0'>
//                                 <th className="px-4 py-2">ID</th>
//                                 <th className="px-4 py-2">TODO</th>
//                                 <th className="px-4 py-2">STATUS</th>
//                                 <th className="px-4 py-2">ACTION</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data?.data?.map((todo) => (
//                                 <tr key={todo.id}>
//                                     <td className="border px-4 py-2">{todo.id}</td>
//                                     <td className="border px-4 py-2">{todo.text}</td>
//                                     <td className="border px-4 py-2">
//                                         <div className="flex gap-4 items-center">
//                                             <input type="checkbox" className="w-4 h-4" /><p>Done</p>
//                                         </div>
//                                     </td>
//                                     <td className="border px-4 py-2 flex justify-center gap-10">
//                                         <ButtonPrimary
//                                             className="bg-white text-black"
//                                             onClick={() => handleEdit(todo.id, todo.text)}
//                                         >
//                                             Edit
//                                         </ButtonPrimary>
//                                         <ButtonPrimary
//                                             className="bg-red-500 text-white"
//                                             onClick={() => handleDelete(todo.id)}
//                                         >
//                                             Delete
//                                         </ButtonPrimary>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

import Todo from "./pages/todo"
export default function App() {
  return (
    <Todo />
  )
}
