import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-name">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-name">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
