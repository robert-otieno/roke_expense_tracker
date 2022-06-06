import { Snackbar, Alert } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomizedSnackbar = ({ open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Root className={classes.root}>
      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" elevation={6} variant="filled">
          Transaction successfully created.
        </Alert>
      </Snackbar>
    </Root>
  );
};

const PREFIX = "snackbar";

const classes = {
  root: `${PREFIX}_root`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.root}`]: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default CustomizedSnackbar;
