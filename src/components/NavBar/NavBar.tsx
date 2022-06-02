import {
  AppBar,
  Button,
  Toolbar,
  Badge} from '@mui/material';
import * as React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/transparent-logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useCart} from '../../hooks/CartProvider';

const NavBar = (): JSX.Element => {
  const {recipeInfoList} = useCart();

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
          <Badge badgeContent={recipeInfoList.length} color="secondary">
            <ShoppingCartIcon sx={{color: 'white'}}/>
          </Badge>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
