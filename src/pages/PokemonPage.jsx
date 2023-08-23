import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Loader } from "../components";
import { PokemonContext } from "../context/PokemonContext";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardMedia,
  Chip,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { typeColors } from "../helper/typesColors";

export const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <main className="container main-pokemon">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Stack flexDirection="row" sx={{ padding: "24px 0" }} gap={4}>
            {pokemon.types.map((type) => (
              <Chip
                label={type.type.name}
                sx={{
                  backgroundColor: typeColors[type.type.name],
                  color: "white",
                }}
              />
            ))}
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              with: "100%",
              gap: "48px",
            }}
          >
            <Box>
              <Box
                sx={{
                  boxShadow: "7px 7px 18px 0px rgba(0,0,0,0.75)",
                  padding: "24px",
                  borderRadius: "12px",
                  backgroundColor: "white",
                }}
              >
                <img src={pokemon.sprites.other.dream_world.front_default} />
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{ marginBottom: "48px", color: "white" }}
              >
                Especificaciones
              </Typography>
              <div>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Abilities</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      {pokemon.abilities.map((ability, index) => (
                        <ListItem>
                          <ListItemText primary={ability.ability.name} />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Specs</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <ListItem>
                        <ListItemText primary={`Height: ${pokemon.height}`} />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={`Base Experience: ${pokemon.base_experience}`}
                        />
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Moves</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {pokemon.moves.map((move) => (
                      <Chip
                        label={move.move.name}
                        color="secondary"
                        sx={{ margin: "4px" }}
                      />
                    ))}
                  </AccordionDetails>
                </Accordion>
              </div>
            </Box>
          </Box>
        </>
      )}
    </main>
  );
};
