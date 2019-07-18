import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems, tertiaryListItems, quaternaryListItems, quinaryListItems } from './listItems';
import Totals from './Totals';
import SiteVisits from './SiteVisits';
import Revenue from './Revenue';
import ClickAway from './Dropdown';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


function MadeWithLove() {
  return (
    <p></p>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    width: 40,
    height: 40,
    color: '#fff',
    fontSize:'20px',
    textAlign:'right',
    backgroundColor:'#fcad00'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    backgroundColor:'#2a333d !important',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  header: {
    fontSize: '40px !important',
    fontWeight: '100',
    lineHeight: '35px',
    color: 'grey',
    margin: '30px 0px 0px 0px',
  },
  subheader: {
    fontSize: '14px !important',
    fontWeight: '100',
    color: 'grey',
    margin: '0px',
    paddingBottom:'10px'
  },
  noMargin: {
    margin: '0 !important',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  hamburger: {
    
  },
  Inline: {
    display:'flex',
    justifyContent:' space-between',
    alignItems:'baseline',
    flexWrap: 'wrap'
 },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon style={{color:'white'}} />
          </IconButton>
          <Typography component="h7" variant="h7" color="inherit" noWrap className={classes.title}>
          <SearchIcon style={{marginBottom:'-5px', marginRight:'10px'}} /> Search...
          </Typography>
          <Grid style={{display:'flex', alignItems:'center'}}>
          <Avatar alt="avatar" className={classes.orangeAvatar}>A</Avatar>
          <div style={{color:'white', marginBottom:'-5px' }}><KeyboardArrowDownIcon /></div>
        </Grid>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
       style={{backgroundColor:'#2a333d !important'}} 
      >
        <div className={classes.toolbarIcon}>
        <IconButton className={classes.hamburger}>
          <MenuIcon style={{color:'white'}} />
          </IconButton>
        </div>
        
        <List>{mainListItems}</List>
        
        <List>{secondaryListItems}</List>

        <List>{tertiaryListItems}</List>

        <List>{quaternaryListItems}</List>

        <List>{quinaryListItems}</List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <div className={classes.Inline}>
          <div>
            <Typography color="inherit" noWrap className={classes.header}>
            <p className={classes.noMargin}>Dashboard</p>
            </Typography>
            <Typography color="inherit" noWrap className={classes.subheader}>
            <p className={classes.noMargin}>dashboard & statistics</p>
            </Typography>
          </div>
          <div>
            <ClickAway>17 January 2016 - 15 February 2016</ClickAway>
          </div>
        </div>
        </Container>

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Totals */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
               <Totals />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12} md={6}  lg={6}>
              <Paper className={classes.paper}>
                <SiteVisits />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}  lg={6}>
              <Paper className={classes.paper}>
                <Revenue />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <MadeWithLove />
      </main>
    </div>
  );
}