import React from 'react';
import './NavBar.scss';
import { AppBar, Button, Toolbar } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import DevicesIcon from '@mui/icons-material/Devices';
import TerrainIcon from '@mui/icons-material/Terrain';
import { useNavigate } from 'react-router';

const NavBar = () => {
  const navigate = useNavigate();

  const scrollToSocial = () => {
    const socialEle = document.getElementById('socialLife');
    if (socialEle) {
      socialEle.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const navigateToRouteProvided = (path) => {
    navigate(path);
  };

  const redirectToInstagram = () => {
    const url = '';
   // window.open(url, '_blank');
  };

  return (
    <AppBar
      position="static"
      style={{ background: 'transparent', boxShadow: 'none' }}
    >
      <Grid container>
        <Grid xs={3} md={6}>
          <Toolbar disableGutters sx={{ paddingTop: 0.5 }}>
            <DevicesIcon
              onClick={() => navigateToRouteProvided('/')}
              sx={{ mr: 1, ml: 1, cursor: 'pointer' }}
            />
            <TerrainIcon
              onClick={redirectToInstagram}
              sx={{ mr: 1, ml: 2, cursor: 'pointer' }}
            />
          </Toolbar>
        </Grid>
        <Grid xs={9} md={6}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'flex' },
              float: 'right',
              mr: 4,
            }}
          >
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={() => navigateToRouteProvided('/resume')}
            >
              Resume
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={scrollToSocial}
            >
              Contact
            </Button>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
};
export default NavBar;
