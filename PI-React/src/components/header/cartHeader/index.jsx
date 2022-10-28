import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import "./sytle.sass"

export default function CartHeader() {
  return (
    <Stack >
      <div className='cart007'>
      <IconButton className='logoCart' color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      </div>
    </Stack>
  );
}
