import { supabase } from "../config/supabaseClient";

 export const fetchTodos = async () => {
        const {data: todos, error} = await supabase
        .from("todos")
        .select('*')
        console.log(todos);
        return {todos, error}
        
      }
export default fetchTodos


 