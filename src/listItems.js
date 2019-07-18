import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import FilterNoneOutlined from '@material-ui/icons/FilterNone';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';



export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <DescriptionOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Documentation" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <WhatshotIcon />
      </ListItemIcon>
      <ListItemText primary="Admin Plugins" />
          <div className="lighter"><ChevronRightIcon /></div>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <CheckBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Admin Forms" />  
      <div className="lighter"><ChevronRightIcon /></div>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ChromeReaderModeOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Admin Layouts" />
      <div className="lighter"><ChevronRightIcon /></div>
    </ListItem>
  </div>
);

export const tertiaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InsertChartOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Information Panels" />
      <div className="lighter"><ChevronRightIcon /></div>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingBasketIcon />
      </ListItemIcon>
      <ListItemText primary="Ecommerce" />
      <div className="lighter"><ChevronRightIcon /></div>
    </ListItem>
  </div>
);

export const quaternaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <StarBorderIcon />
      </ListItemIcon>
      <ListItemText primary="UI Elements" />
      <div className="lighter"><ChevronRightIcon /></div>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MenuIcon />
      </ListItemIcon>
      <ListItemText primary="Form Elements" />
      <div className="lighter"><ChevronRightIcon /></div>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Plugins" />
      <div className="lighter"><ChevronRightIcon /></div>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FilterNoneOutlined />
      </ListItemIcon>
      <ListItemText primary="Pages" />
      <div className="lighter"><ChevronRightIcon /></div>
    </ListItem>
  </div>
);
export const quinaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <FiberManualRecordOutlinedIcon style={{color:'yellow'}}/>
      </ListItemIcon>
      <ListItemText primary="Executive Meeting" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FiberManualRecordOutlinedIcon style={{color:'red'}}/>
      </ListItemIcon>
      <ListItemText primary="HelpDesk Redesign" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FiberManualRecordOutlinedIcon style={{color:'purple'}} />
      </ListItemIcon>
      <ListItemText primary="Sony Board Meeting" />
    </ListItem>
  </div>
);