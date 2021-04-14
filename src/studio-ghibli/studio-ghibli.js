/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function getFilmListFromUrl() {
  const url = 'https://ghibliapi.herokuapp.com/films/';
  const fetchResponse = fetch(url);
  const jsonResponse = fetchResponse
    .then((response) => response.json());

  return jsonResponse;
}

function printFilmList(list) {
  const container = document.querySelector('.container');

  list.forEach((film) => {
    const { id, title, description } = film;
    const aElement = document.createElement('a');
    aElement.href = `../studio-ghibli-detail/studio-ghibli-detail.html?id=${id}`;
    aElement.className = 'card';

    const filmDiv = document.createElement('div');
    filmDiv.className = 'film__container';

    const h2 = document.createElement('h2');
    h2.className = 'film-title';
    h2.textContent = title;

    const img = document.createElement('img');
    img.className = 'film-cover';
    for (prop in FILMS) {
      const { cover } = FILMS[prop];
      if (prop === title) {
        img.src = cover;
      }
    }

    filmDiv.appendChild(h2);
    filmDiv.append(img);
    aElement.appendChild(filmDiv);
    container.appendChild(aElement);
  });
}
