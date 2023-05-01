const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll('input');

const entryTextSelection = document.getElementById('entry-text');

const movies = [];

// 'movie-element' class    "movie-element__image" class     "movie-element__info"  class

const updateUI = () => {
    if(movies.length === 0) {
        entryTextSelection.style.display = 'block';
    } else {
        entryTextSelection.style.display = 'none';
    }
};

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for(const movie of movies) {
        if(movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 starts</p>
        </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInput();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imgUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(titleValue.trim() === '' || 
       imgUrlValue.trim() === '' || 
       ratingValue.trim() === '' || 
       ratingValue < 0 || 
       ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5)');
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imgUrlValue,
        rating: ratingValue
    }

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

const clearMovieInput = () => {
    for(const userInput of userInputs) {
        userInput.value = '';
    }
};

const backdropClickHandler = () => {
    toggleMovieModal();
    clearMovieInput();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);