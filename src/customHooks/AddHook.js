import { useQuery } from "@tanstack/react-query";
import fetchTodos from "../supabaseAPI/TodoApi";

export const useGetAllTodos = (userId) => {
  const { data, isError, isLoading, error } = useQuery({
    queryFn: () => fetchTodos(userId),
    queryKey: ["queryKey", userId],
  });
console.log(userId);

  return { data, isError, isLoading, error };
};
