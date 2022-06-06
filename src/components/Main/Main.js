import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material'
import InfoCard from '../InfoCard'
import Form from './Form'

import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { ExpenseTrackerContext } from '../../context/context';

const ExpenseTracker = () => {
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Root>
      <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
        <CardContent>
          <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
          <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
            <InfoCard />
          </Typography>
          <Divider className={classes.divider} />
          <Form />
        </CardContent>
      </Card>
    </Root>
  )
}

const PREFIX = 'main';

const classes = {
  media: `${PREFIX}_media`,
  expand: `${PREFIX}_expand`,
  expandOpen: `${PREFIX}_expandOpen`,
  divider: `${PREFIX}_divider`,
}

const Root = styled('div')(( { theme }) => ({
  [`& .${classes.media}`]: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  [`& .${classes.expand}`]: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  [`& .${classes.expandOpen}`]: {
    transform: 'rotate(180deg)',
  },
  [`& .${classes.divider}`]: {
    margin: '20px 0',
  },
}))

export default ExpenseTracker