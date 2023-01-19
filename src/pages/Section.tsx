import Navbar from 'components/Navbar'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Box from '@mui/material/Box';

const Section = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1>Section Name</h1>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0px 0 50px 0px" }}>

                <Card sx={{ maxWidth: 700 }}>
                    <CardActionArea>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1>Introduction</h1>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0px 0 50 0px" }}>
                <Card sx={{ maxWidth: 600 }}>
                    <CardActionArea>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "50px" }}>
                <Card sx={{ maxWidth: 600 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </>
    )
}

export default Section
