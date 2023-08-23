import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { typeColors } from "../helper/typesColors";

export const CardPokemon = ({ pokemon }) => {
  const pokemonData = pokemon.data;

  return (
    <Link to={`/pokemon/${pokemonData.id}`} className="card-pokemon">
      <Card sx={{ maxWidth: 345, padding: "12px 18px" }} elevation={8}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={pokemonData.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemonData.name}`}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              N° {pokemonData.id}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {pokemonData.name}
            </Typography>

            <Stack flexDirection="row" gap={2}>
              {pokemonData.types.map((type, index) => (
                <Chip
                  label={type.type.name}
                  sx={{
                    backgroundColor: typeColors[type.type.name],
                    color: "white",
                  }}
                  key={index}
                />
              ))}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
