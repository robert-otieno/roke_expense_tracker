import { Grid } from '@mui/material'
import React from 'react'

import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';

import { styled } from '@mui/material/styles';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import List from './components/Main/List'

const App = () => {
  return (
    <Root>
      <Grid container spacing={2} style={{ height: '100vh'}}> {/**/}
        {/* <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid> */}
        <Grid item container xs sm={6} spacing={2}> {/* className={classes.main} */}
          <Grid item xs={12} sm={6}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={6}>
            <List />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3} >{/* className={classes.desktop} */}
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} >{/* className={classes.last} */}
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