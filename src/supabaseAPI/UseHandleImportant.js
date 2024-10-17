import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleImportant } from "../supabaseAPI/TodoApi";

export const useHandleImportant = (todos, setTasks, user) => {
  const queryClient = useQueryClient();

  const { mutate: toggleImportant, isError, isLoading, error } = useMutation({
    mutationFn: (taskId) => handleImportant(taskId, todos, setTasks, user),
    onSuccess: () => {
      queryClient.invalidateQueries(["queryKey"]);
    },
  });

  return { toggleImportant, isError, isLoading, error };
};
