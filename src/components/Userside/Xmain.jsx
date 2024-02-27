import { CircularProgress, Container, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { Buffer } from 'buffer';
import './Xmain.css'

const Moviedetails = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3005/view")
            .then(response => {
                setMovies(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching movie data:', err);
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography variant="h6" color="error">Error: {error.message}</Typography>
            </div>
        );
    }

    return (
        <Container className='body'>
            <Typography className='yt' variant="h3" align="center" gutterBottom style={{ margin: '20px 0' }}>STREAMSAVY</Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {movies.map((movie, index) => (
                    <Card key={index} style={{ margin: '20px', width: '300px' }}>
                        <CardContent>
                            {movie.image1 && (
                                <img src={`data:image/jpeg;base64,${Buffer.from(movie.image1.data).toString('base64')}`} style={{ marginBottom: '20px', maxWidth: '100%' }} alt="Movie" />
                            )}
                            <Typography variant="subtitle1" gutterBottom><strong>{movie.MovieName}</strong></Typography>
                           
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default Moviedetails;
