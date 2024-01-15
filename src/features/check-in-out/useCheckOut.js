import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import toast from "react-hot-toast";

function useCheckOut() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} succesfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (err) => {
      toast.error("there was an error while checking out");
      console.log(err);
    },
  });
  return { checkout, isCheckingOut };
}

export default useCheckOut;
