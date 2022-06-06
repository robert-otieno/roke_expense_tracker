import { Grid } from '@mui/material'
import React from 'react'

import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';

import { styled } from '@mui/material/styles';
import Details from './components/Details/Details';
import Main from './components/Main/Main';

const App = () => {
  return (
    <Root>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        {/* <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid> */}
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
       </Grid>
       <PushToTalkButtonContainer>
          <PushToTalkButton />
          <ErrorPanel />
        </PushToTalkButtonContainer>
    </Root>
  )
}

const PREFIX = 'app';

const classes = {
  grid: `${PREFIX}_grid`,
  mobile: `${PREFIX}_mobile`,
  main: `${PREFIX}_main`,
  desktop: `${PREFIX}_desktop`,
  last: `${PREFIX}_last`,
}

const Root = styled('div')(( { theme }) => ({
  [`& .${classes.grid}`]: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  [`& .${classes.mobile}`]: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  [`& .${classes.main}`]: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  [`& .${classes.desktop}`]: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  [`& .${classes.last}`]: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
}))

export default App