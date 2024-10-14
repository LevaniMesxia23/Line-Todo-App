import { useQuery } from "@tanstack/react-query";
import fetchTodos from "../supabaseAPI/TodoApi";

export const useGetAllTodos = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryFn: fetchTodos,
    queryKey: ["queryKey"],
  });
  return { data, isError, isLoading, error }
};

