const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if(title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }

    const newMovie = {
        info: {
            title, // or title: title,
            [extraName]: extraValue
        },
        id: Math.random()
    }

    movies.push(newMovie);
    console.log(newMovie);
};

addMovieBtn.addEventListener('click', addMovieHandler);





















// const movieList = document.getElementById('movie-list');
// movieList.style['background-color'] = 'red';
// movieList.style.display = 'block';

// const userChosenKeyName = 'level';

// let person = {
//     'first name': 'Romulo',
//     age: 36,
//     hobbies: ['coding', 'cooking'],
//     [userChosenKeyName]: '...',
//     greet: function() {
//         alert('Hi there!');
//     },
//     1.5: 'hello'
// };

// // person.age = 35;
// delete person.age;
// // person.age = undefined;
// // person.age = null;
// // person.greet();

// person.isAdmin = true;

// const keyName = 'first name';

// console.log(person[keyName]);
// console.log(person[1.5]);
// console.log(person);
