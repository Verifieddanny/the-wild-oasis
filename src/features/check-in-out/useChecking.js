import { QueryClient, useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const queryClient = new QueryClient();
function useChecking() {
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: HiOutlineArrowTopRightOnSquare,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} succesfully checked in`);
      queryClient.invalidateQueries({ active: true });

      navigate("/");
    },
    onError: (err) => {
      toast.error("there was an error while checking in");
      console.log(err);
    },
  });
  return { checkin, isCheckingIn };
}

export default useChecking;
