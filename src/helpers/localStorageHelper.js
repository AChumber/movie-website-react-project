const TAG = 'myMovies';

export const getLocalStorageMovies = () => {
    try {
        const storedArr = localStorage.getItem(TAG);
        return JSON.parse(storedArr);
    } catch(exception) {
        return undefined;
    }
}

export const putInLocalStorage = (moviesList) => {
    try {
        localStorage.setItem(TAG, JSON.stringify(moviesList));
    } catch(exception) {
        console.log(exception);
    }
}