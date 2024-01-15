import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCurrentUser } from "../../services/apiAuth";

function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
export default useUser;
