import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import logo from './movies-logo.svg';

const Nav = () => {
    const [navSearch, setNavSearch] = useState('');
    const [isToggleLinks, setIsToggleLinks] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        //https://dev.to/ziratsu/code-a-responsive-navbar-with-react-45le - responsive navbar
        const changeScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeScreenWidth);

        return () => {
            window.removeEventListener('resize', changeScreenWidth);
        }
    })

    return (
        <header>
            <nav className="nav">
                <Link to="/"><img className="logo" src={ logo } alt='Movies Logo'/></Link>
                <div className="nav-toggle-menu-btn" onClick={() => setIsToggleLinks(!isToggleLinks)}>
                    <div className={ isToggleLinks ? "toggle" : "" } id="line1"></div>
                    <div className={ isToggleLinks ? "toggle" : "" } id="line2"></div>
                    <div className={ isToggleLinks ? "toggle" : "" } id="line3"></div>
                </div>
                {(isToggleLinks || screenWidth > 920) && (
                    <div className="nav-links">
                        <a className="nav-link" href="#trending">Trending</a>
                        <a className="nav-link" href="#releases">New Releases</a>
                        <a className="nav-link" href="#my">My Movies</a>
                        <input 
                            type="text"
                            placeholder="Enter Movie Name..." 
                            value={ navSearch } 
                            onChange={ (e) => setNavSearch(e.target.value) } />
                    </div> 
                )}
            </nav>
        </header>
    )
}

export default Nav

