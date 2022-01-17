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
                      <Route path="list/:type" element={ <ListOfMovies /> } />
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
