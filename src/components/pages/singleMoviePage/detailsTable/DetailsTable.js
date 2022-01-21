import React from 'react';
import './detailsTable.css';

const DetailsTable = ({ movieData }) => {
    return (
        <table className='single-movie-details-table'>
            <tbody>
                {(movieData.homepage !== null) && (
                    <tr>
                        <td className='table-data-name'>Movie Website</td>
                        <td> <a href={movieData.homepage} target='_blank' rel='noopener noreferrer'>{`${movieData.title} Website`} </a></td>
                    </tr>
                ) }
                <tr>
                    <td className='table-data-name'>Budget</td>
                    <td>{movieData.budget}</td>
                </tr>
                <tr>
                    <td className='table-data-name'>Revenue</td>
                    <td>{movieData.revenue}</td>
                </tr>
                {
                    <tr>
                        <td className='table-data-name' rowSpan={movieData.production_countries.length}>
                            {movieData.production_countries.length > 1 ? 'Countries' :'Country'} shot in
                        </td>
                        <td>{movieData.production_countries[0]['name']}</td>
                    </tr>
                }
                { movieData.production_countries.slice(1).map((country, index) => (
                    <tr key={index}>
                        <td>{country.name}</td>
                    </tr>
                )) }
                {
                    <tr>
                        <td className='table-data-name' rowSpan={movieData.production_companies.length}>
                            {movieData.production_companies.length > 1 ? 'Production Companies' :'Production Company'}
                        </td>
                        <td>{movieData.production_companies[0]['name']}</td>
                    </tr>
                }
                { movieData.production_companies.slice(1).map((company, index) => (
                    <tr key={index}>
                        <td>{company.name}</td>
                    </tr>
                )) }
            </tbody>
        </table>
    )
}

export default DetailsTable
