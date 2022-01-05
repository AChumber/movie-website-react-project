import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleMoviePage = () => {
    const [movieData, setMovieData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    let { movieId } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                if(!res.ok) {
                    setIsLoading(!isLoading);
                    throw new Error("HTTP Error Status - "+res.status);
                }
                return res.json();
            })
            .then(data => {
                setIsLoading(!isLoading);
                setMovieData(data);
            })
            .catch(err => console.log(err));

    }, [movieId])


    return (
        <section className='single-page-section'>
            <h1>Single Movie Page</h1>

            <h3>Related Movies</h3>
        </section>
    )
}

export default SingleMoviePage
