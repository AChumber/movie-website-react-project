import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import logo from './movies-logo.svg';
import Search from './search/Search';
import { CSSTransition } from 'react-transition-group';

const Nav = () => {
    const [isToggleSearch, setIsToggleSearch] = useState(false);
    const [isToggleLinks, setIsToggleLinks] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const searchRef = useRef(null);  //reference search container div to use in CSSTransition via noderef. Otherwise error occurs

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

    //Close links drawer once an link is clicked
    const onLinkClick = useCallback(() => setIsToggleLinks(prevState => !prevState), []);

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
                        <Link to="/list/trending" className="nav-link" onClick={ onLinkClick }>Trending</Link>
                        <Link to="/list/new%20releases" className="nav-link" onClick={ onLinkClick }>New Releases</Link>
                        <Link to="/list/my-movies" className="nav-link" onClick={ onLinkClick }>My Movies</Link>
                        {/* Toggle Search component when pressed */}
                        <div className='nav-link nav-search-icon' onClick={ () => setIsToggleSearch(isSearch => !isSearch) }>
                            <i className="bi bi-search"></i>
                        </div>
                    </div> 
                )}
            </nav>
            <CSSTransition in={isToggleSearch} nodeRef={searchRef} unmountOnExit timeout={500} classNames="search-transition">
                {
                    isToggleSearch ?(
                        <div className='search-container' ref={searchRef}>
                            <Search toggleModal={ setIsToggleSearch } />
                        </div>
                    ) : <></>
                }
            </CSSTransition>
        </header>
    )
}

export default Nav

