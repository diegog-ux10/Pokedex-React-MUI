import { styled, alpha } from "@mui/material/styles";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { Link, Outlet, useNavigate } from "react-router-dom";

import logo from "../assets/Pokédex_logo.png";

import { Button, Box, Toolbar, InputBase, AppBar } from "@mui/material";


import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = () => {
    console.log(valueSearch);
    if(!valueSearch) {
      console.log("entre");
      navigate("/")
      return
    }
    navigate("/search", {
      state: valueSearch,
    });
    onResetForm();
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: "48px" }}>
        <AppBar position="static" sx={{ background: "black", padding: "18px" }}>
          <Toolbar
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Link to="/">
                <img src={logo} />
              </Link>
            </Box>
            <Box display="flex" gap={2}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={onInputChange}
                  name="valueSearch"
                />
              </Search>
              <Button onClick={onSearchSubmit} variant="contained" color="secondary">
                Buscar
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </>
  );
};
