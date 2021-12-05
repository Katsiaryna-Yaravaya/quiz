import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";

import { getHighersScore } from "../../core/utils";

import "./index.css";

const ModalEdit = ({
  isOpenModal, handleClose, rowSelected, dataUser,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues:
      {
        name: rowSelected.original.name,
        bestResult: getHighersScore(rowSelected.original),
        numberOfGames: rowSelected.original.userGames.length,
      },
  });

  const onSubmit = (data): void => {
    dataUser(data, rowSelected.original);
  };

  return (
    <Modal
      aria-labelledby="modal-modal-title"
      open={isOpenModal}
      onClose={handleClose}
    >
      <Box className="modal__box">
        <Typography className="modal__header" id="modal-modal-title" variant="h6" component="h2">
          About choose user
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__sign-up">
            <input className="sign-up__user" placeholder="Name" {...register("name")} />
            <input className="sign-up__user" disabled placeholder="Best result" {...register("bestResult")} />
            <input className="sign-up__user" disabled placeholder="Number of games" {...register("numberOfGames")} />
          </div>
          <div className="form__sign-up-buttons">
            <button className="form__sign-up-button" type="submit">save</button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalEdit;
