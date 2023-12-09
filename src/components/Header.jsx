import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink } from "react-router-dom";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ background: "linear-gradient(to right, 	#007c7c, #000000)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 40,
              display: { xs: "none", md: "flex" },
              fontFamily: "Raleway, Arial",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "#83e3f2",
              textDecoration: "none",
            }}
          >
            MovieSlap
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#777" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                component={RouterLink}
                to="/"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/movies"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Movies</Typography>
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">TV-Shows</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Raleway, Arial",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "#83e3f2",
              textDecoration: "none",
            }}
          >
            MovieSlap
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              component={RouterLink}
              to="/"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 6, color: "white", display: "block" }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/movies"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 6, color: "white", display: "block" }}
            >
              Movies
            </Button>
            <Button
              component={RouterLink}
              to="/"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mx: 6, color: "white", display: "block" }}
            >
              TV-Shows
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
