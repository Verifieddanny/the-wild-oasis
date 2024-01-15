import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { logOut } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

function useLogOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });
  return { logout, isPending };
}

export default useLogOut;
