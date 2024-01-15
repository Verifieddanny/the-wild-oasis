import { useMutation } from "@tanstack/react-query";
import React from "react";
import { signup as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignUp() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created. Please verify thenre account from the user's email address "
      );
    },
  });

  return { signup, isPending };
}

export default useSignUp;
