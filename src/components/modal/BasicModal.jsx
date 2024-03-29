import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./BasicModal.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #f45d96",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  modalOpenerText,
  modalHeadText,
  modalBodyText,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <p className={styles.modalOpenerText}>{modalOpenerText}</p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalHeadText}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalBodyText}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
