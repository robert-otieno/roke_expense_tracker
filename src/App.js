import { Grid } from '@mui/material'
import React from 'react'

import { styled } from '@mui/material/styles';

const App = () => {
  return (
    <Root>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          {/* <Details title="Income" /> */}Income
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          {/* <Main /> */}Main
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          {/* <Details title="Income" /> */}Income
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          {/* <Details title="Expense" /> */}Expense
        </Grid>
      </Grid>
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
  [`& .${classes.grid}`]: {},
  [`& .${classes.mobile}`]: {},
  [`& .${classes.main}`]: {},
  [`& .${classes.desktop}`]: {},
  [`& .${classes.last}`]: {},
}))

export default App