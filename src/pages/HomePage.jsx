import React, { useContext } from 'react';
import { FilterBar, PokemonList } from '../components';
import { PokemonContext } from '../context/PokemonContext';
import { Button, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

export const HomePage = () => {

    const {onClickLoadMore, active, setActive} = useContext(PokemonContext)

	return (
		<>
			<div className='container-filter container'>
				<div className='icon-filter' onClick={() => setActive(!active)}>
					<TuneIcon sx={{color: "white"}} />
					<Typography variant="body1" sx={{color: "white"}} >Filtrar</Typography>
				</div>
			</div>
			<PokemonList />
            <FilterBar />
            <div className="container-btn-load-more container">
				<Button onClick={onClickLoadMore} variant='contained'>Load More...</Button>
            </div>
		</>
	);
};
