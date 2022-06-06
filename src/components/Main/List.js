import { Delete, MoneyOff } from '@mui/icons-material';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@mui/material';
import { red, green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';

import { ExpenseTrackerContext } from '../../context/context'

const List = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);

  return (
    <Root>
      <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
          <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </MUIList>
    </Root>
  )
}

const PREFIX = 'list';

const classes = {
  avatarIncome: `${PREFIX}_avatarIncome`,
  avatarExpense: `${PREFIX}_avatarExpense`,
  list: `${PREFIX}_list`,
}

const Root = styled('div')(( { theme }) => ({
  [`& .${classes.avatarIncome}`]: {
    color: '#fff',
    backgroundColor: green[500],
  },
  [`& .${classes.avatarExpense}`]: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  [`& .${classes.list}`]: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}))

export default List