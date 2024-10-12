import TasksSection from "../components/TasksSection.jsx"
import supabase from "../config/supabaseClient.js"
function Home() {
  console.log(supabase);
  
  return (
    <div>
      <TasksSection />
    </div>
  )
}

export default Home