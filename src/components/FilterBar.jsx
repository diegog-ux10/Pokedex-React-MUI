import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import {
  Checkbox,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";

export const FilterBar = () => {
  const { active, handleCheckbox, setActive } = useContext(PokemonContext);

  const pokemonTypes = [
    "grass",
    "fire",
    "bug",
    "fairy",
    "dragon",
    "shadow",
    "ground",
    "normal",
    "psychic",
    "steel",
    "dark",
    "electric",
    "flying",
    "flying",
    "ice",
    "poison",
    "rock",
    "water",
  ];

  return (
    <Drawer open={active} onClose={() => setActive(false)}>
      <Typography variant="h4" sx={{padding: "12px"}}>Tipos</Typography>
      <Stack sx={{ padding: "12px 48px" }} gap={2}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {pokemonTypes.map((value, index) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem key={index} disablePadding>
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <Checkbox
                      name={value}
                      id={value}
                      onChange={handleCheckbox}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </Drawer>
  );
};
