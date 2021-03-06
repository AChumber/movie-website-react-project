import React, { useEffect } from 'react';
import CastCard from './castCard/CastCard';
import useFetch from '../../../../hooks/useFetch';
import './castGrid.css';
import SkeletonCastGrid from '../../../../skeletons/skeletonCastGrid/SkeletonCastGrid';

const CastGrid = ({ movieId, setDirector, setWriters }) => {
    const { data:castData, isLoading } = useFetch(`${process.env.REACT_APP_API_BASE_URL}/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`);

    useEffect(() => {
        if(!isLoading) {
            let director = castData.crew
                .filter(crewMember => crewMember.job === "Director" && crewMember.department === "Directing");
            
            let writer = castData.crew
                .filter(crewMember => crewMember.job === "Writer" && crewMember.department === "Writing");
    
            const stringBuilder = (arr) => {
                let result = '';
                if(arr.length === 2) result = `${arr[0]['name']} & ${arr[1]['name']}`;
                else {
                    arr.forEach(data => result+= `${data.name} `);
                }
                return result;
            }
            
    
            setDirector(stringBuilder(director));
            setWriters(stringBuilder(writer));
        }
    }, [isLoading, castData.crew, setDirector, setWriters])

    return (
        <div className='single-movie-container cast-grid-container'>
            <h2 className='extra-detail-title'>Cast</h2>
                <div className='cast-grid'>
                { 
                    !isLoading ? (
                        castData.cast.slice(0, 12).map((castMember) => {
                            return <CastCard key={ castMember.id } castMember={ castMember } />
                        })
                        ) : (
                            <SkeletonCastGrid />
                        ) 
                }
                </div>
        </div>
    )
}

export default CastGrid
