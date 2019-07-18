import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Subtitle from './Subtitle';
import { makeStyles } from '@material-ui/core/styles';
import { typography } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
 HeaderInline: {
    display:'inline-flex',
    alignItems:'baseline',
   },
 Header: {
   fontSize:'30px !important',
   marginRight:'20px !important',
   display:'inline',
  },
 SubHeader: {
    fontSize:'12px !important',
    margin:'0',
    display:'inline',
    color:'grey !important',
   },
   DisplayFlex: {
   display:'inline-flex',
   justifyContent:'center',
   alignItems:'center',
   height:'100%',
   flexWrap:'wrap'
   },
  AlignCenter: {
    textAlign:'center',
    padding:'0px 50px'
   }
}));

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export default function Totals() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div  className={classes.HeaderInline}>
      <Title className={classes.Header}>Totals</Title>
      <Subtitle className={classes.SubHeader}>Last Week</Subtitle>
      </div>
     <div className={classes.DisplayFlex}>
        <div className={classes.AlignCenter} style={{ borderRight: '0.1em solid #eeeeee' }}>
        <Typography component="p" variant="h3">
        597
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
        New Feedbacks
        </Typography>
        </div>
        <div  className={classes.AlignCenter} style={{ borderRight: '0.1em solid #eeeeee' }}>
        <Typography component="p" variant="h3">
        16.6M$
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
        Total Profit
        </Typography>
        </div>
        <div  className={classes.AlignCenter} style={{ borderRight: '0.1em solid #eeeeee' }}>
        <Typography component="p" variant="h3">
        7.5K
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
        New Orders
        </Typography>
        </div>
        <div  className={classes.AlignCenter}>
        <Typography component="p" variant="h3">
        +48%
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext}>
        Brand Popularity
        </Typography>
        </div>
    </div>
        
       {/*} <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
        </LineChart>*/}
     
    </React.Fragment>
  );
}