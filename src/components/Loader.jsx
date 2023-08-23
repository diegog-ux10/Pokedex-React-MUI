import { Box, CircularProgress } from '@mui/material';


export const Loader = () => {
	return (
        <Box sx={{display: "flex", justifyContent: "center", padding: "48px 0"}}>
            <CircularProgress />
        </Box>
    )
};
