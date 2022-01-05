import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../nav/movies-logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className='footer-logo'>
                <Link to="/" ><img className="logo" src={ logo } alt='Movies Logo' /></Link>
                <p>Movies - Find yours</p>
            </div>
            <p><i>This is a project using an external API - <a rel='noreferrer' target="_blank" href='https://developers.themoviedb.org'><b>TheMoviesDB</b></a> </i></p>
        </footer>
    )
}

export default Footer;