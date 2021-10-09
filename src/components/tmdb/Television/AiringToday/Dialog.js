import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function SimpleDialog(props) {
  const { onClose, value, open } = props;

  // const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    onClose();
  };
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        TV Dialog
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>ID : {value}</Typography>
      </DialogContent>
      <DialogActions>&nbsp;</DialogActions>
    </BootstrapDialog>
  );
}

export default SimpleDialog;
