// import { useMutation } from "@tanstack/react-query";
// import { apiAddTodo } from "../supabaseAPI/TodoApi";

// export function useAddTodo() {
//   const addTodoMutation = useMutation({
//     mutationFn: ({ userId, complate, important, description }) =>
//       apiAddTodo(userId, complate, important, description),
//     mutationKey: ["addKeys"],
    
//   });
  
//   const { mutate: addTodo, data, isLoading } = addTodoMutation;
  
//   return { addTodo, data, isLoading };
// }
// console.log(useAddTodo);
