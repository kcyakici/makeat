import {
  AppBar,
  Button,
  Toolbar} from '@mui/material';
import * as React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/transparent-logo.png';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <img style={{height: '56px'}} src={logo} alt="MakEat"></img>
        </Link>
        <div style={{flexGrow: 1}} />
        <Link to="/about">
          <Button variant="text" sx={{color: 'white'}}>About</Button>
        </Link>
        <Link to="/contact">
          <Button variant="text" sx={{color: 'white'}}>Contact</Button>
        </Link>
        <Link to="/items">
          <Button variant="text" sx={{color: 'white'}}>Items</Button>
        </Link>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
