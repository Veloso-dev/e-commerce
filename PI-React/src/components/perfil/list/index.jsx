import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function NestedList({setActive}) {
  return (
    <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          className='listMui'
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">

            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>

            <ListItemText onClick={() => setActive('perfil')} primary="Perfil" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>

            <ListItemText onClick={() => setActive('endereco')} primary="Endereços" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingBagIcon />
            </ListItemIcon>

            <ListItemText onClick={() => setActive('pedido')} primary="Pedidos" />
          </ListItemButton>
        </List>
        
  )
}

export default NestedList