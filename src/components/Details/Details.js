import { Card, CardHeader, CardContent, Typography } from "@mui/material"
import { Doughnut } from "react-chartjs-2"
import 'chart.js/auto'

import { styled } from '@mui/material/styles';
import useTransactions from '../../useTransactions'

const Details = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);

  return (
    <Root>
      <Card className={title === 'Income' ? classes.income : classes.expense}>
        <CardHeader title={title} subheader={subheader} />
        <CardContent>
          <Typography variant="h5">${total}</Typography>
          <Doughnut data={chartData} />
        </CardContent>
      </Card>
    </Root>
  )
}

const PREFIX = 'details';

const classes = {
  income: `${PREFIX}_income`,
  expense: `${PREFIX}_expense`,
}

const Root = styled('div')(( { theme }) => ({
  [`& .${classes.income}`]: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
  },
  [`& .${classes.expense}`]: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
  },
}))

export default Details