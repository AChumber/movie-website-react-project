import './App.css';
import Nav from './components/layout/nav/Nav';
import store from './store';
import { Provider } from 'react-redux';
import Footer from './components/layout/footer/Footer';
import HomePage from './components/pages/homePage/HomePage';
import { Routes, Route, HashRouter } from 'react-router-dom';
import SingleMoviePage from './components/pages/singleMoviePage/SingleMoviePage';
import ListOfMovies from './components/pages/listOfMoviesPage/ListOfMovies';
import NotFound from './components/pages/notFoundPage/NotFound';
import MyMovies from './components/pages/myMoviesPage/MyMovies';
import ListOfMoviesNoParams from './components/pages/listOfMoviesPage/listOfMoviesNoParams/ListOfMoviesNoParams';

function App() {
  return (
    <div className="App">
      <Provider store={ store }>

          <HashRouter>
            <Nav />

                <Routes>
                    <Route path="/">
                      <Route index element={ <HomePage /> } />
                      <Route path="movie/:movieId" element={ <SingleMoviePage /> } />
                      <Route path="list">
                          <Route path="my-movies" element={ <MyMovies /> } />
                          <Route path=":type" element={ <ListOfMovies /> } />
                          <Route path="" element={ <ListOfMoviesNoParams /> } />
                      </Route>
                      <Route path="*" element={ <NotFound /> } />
                    </Route>
                </Routes>

              <Footer />
          </HashRouter>

      </Provider>
    </div>
  );
}

export default App;
