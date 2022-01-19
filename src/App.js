import './App.css';
import Nav from './components/layout/nav/Nav';
import store from './store';
import { Provider } from 'react-redux';
import Footer from './components/layout/footer/Footer';
import HomePage from './components/feature/homePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleMoviePage from './components/feature/singleMoviePage/SingleMoviePage';
import ListOfMovies from './components/feature/listOfMoviesPage/ListOfMovies';
import NotFound from './components/feature/notFoundPage/NotFound';
import MyMovies from './components/feature/myMoviesPage/MyMovies';
import ListOfMoviesNoParams from './components/feature/listOfMoviesPage/ListOfMoviesNoParams';

function App() {
  return (
    <div className="App">
      <Provider store={ store }>

          <BrowserRouter>
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
          </BrowserRouter>

      </Provider>
    </div>
  );
}

export default App;
