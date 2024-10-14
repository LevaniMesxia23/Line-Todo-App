import { supabase } from "../config/supabaseClient";

  const fetchTodos = async () => {
        const {data: todos, error} = await supabase
        .from("todos")
        .select('*')
        console.log(todos);
        return {todos, error}
        
      }
export default fetchTodos


  // const [fetchError, setFetchError] = useState(null)
  // const [todos, setTodos] = useState(null)

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const {data, error} = await supabase
  //     .from("todos")
  //     .select('*')

  //     if(error){
  //       setFetchError("Could not fetch todos")
  //       setTodos(null)
  //       console.log(error)
  //     }
  //     if(data){
  //       setTodos(data)
  //       setFetchError(null)
  //     }
  //   }

  //   fetchTodos()
  // }, [])