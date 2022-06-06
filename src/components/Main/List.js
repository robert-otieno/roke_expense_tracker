import { Delete, MoneyOff } from "@mui/icons-material";
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide, FormGroup, FormControlLabel, Checkbox, CardContent, CardHeader, Card } from "@mui/material";
import { red, green } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { useContext, useState } from "react";

import { ExpenseTrackerContext } from "../../context/context";

const List = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);
  // const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  return (
    <Root>
      <Card>
        <CardHeader title="Transactions List" subheader={
          <FormGroup row>
            {/* <FormControlLabel control={<Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} size="small" />} label="Dense" /> */}
            <FormControlLabel control={<Checkbox checked={secondary} onChange={(event) => setSecondary(event.target.checked)} size="small" />} label="Details" />
          </FormGroup>
        } />
        <CardContent>
          <MUIList dense={true} className={classes.list}>
            {transactions.map((transaction) => (
              <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                      <MoneyOff />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={transaction.category} secondary={secondary ? `$${transaction.amount} - ${transaction.date}` : null} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Slide>
            ))}
          </MUIList>
        </CardContent>
      </Card>
    </Root>
  );
};

const PREFIX = "list";

const classes = {
  avatarIncome: `${PREFIX}_avatarIncome`,
  avatarExpense: `${PREFIX}_avatarExpense`,
  list: `${PREFIX}_list`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.avatarIncome}`]: {
    color: "#fff",
    backgroundColor: green[500],
  },
  [`& .${classes.avatarExpense}`]: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  [`& .${classes.list}`]: {
    maxHeight: "400px",
    overflow: "auto",
  },
}));

export default List;
