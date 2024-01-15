import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogOut from "./useLogOut";
import SpinnerMini from "../../ui/SpinnerMini";
function LogOut() {
  const { logout, isPending } = useLogOut();
  return (
    <ButtonIcon disabled={isPending} onClick={logout}>
      {!isPending ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default LogOut;
