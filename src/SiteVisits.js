import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Subtitle from './Subtitle';
import { makeStyles } from '@material-ui/core/styles';
import { typography } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chart1 from './chart1.PNG';

const useStyles = makeStyles(theme => ({
   HeaderInline: {
        display: 'inline-flex',
        alignItems: 'baseline',
    },
    Header: {
        fontSize: '25px !important',
        marginRight: '20px !important',
       justifyContent:'flex-start'
    },
    SubHeader: {
        fontSize: '12px !important',
        margin: '0',
        color: 'grey !important',
    },
    DisplayFlex: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexWrap: 'wrap'
    },
   AlignCenter: {
        textAlign: 'center',
        padding: '0px 50px'
    },
    Inline: {
       display:'inline-flex',
       justifyContent:' space-between',
    },
    Image: {
        width:'100%',
        margin:'2px 0px 2px 0px'
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

export default function SiteVisits() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.Inline}>
                <div className={classes.HeaderInline}>
                    <Title className={classes.Header}>Site Visits</Title>
                    <Subtitle className={classes.SubHeader}>Weekly Stats</Subtitle>
                </div>
                <div>
                <Button style={{ backgroundColor: '#24d49c', color: 'white', margin:'0px 2px'}}>NEW</Button>
                <Button style={{ backgroundColor: '#fff', color: 'grey', border:'1px solid grey', margin:'0px 2px'}}>RETURNING</Button>
                </div>
            </div>
            <ResponsiveContainer>
                <div>
                <img src={Chart1} alt="Graph 1" className={classes.Image} />
                </div>
            </ResponsiveContainer>
        </React.Fragment>
    );
}