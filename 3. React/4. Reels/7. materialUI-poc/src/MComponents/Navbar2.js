import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:'black'
  },
  appb:{
      backgroundColor:'white'
  },
  acs:{
      color:'black'
  }
}));

export default function Navbar2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appb} position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            Instagram
          </Typography>
          <Button style={{color:'black'}} color="inherit">Login</Button>
          <AccountCircleIcon className={classes.acs}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
