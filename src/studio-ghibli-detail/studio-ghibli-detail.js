
function getIdFromUrl(currentLocation) {
  let id = currentLocation.search;
  id = id.replace('?', '');

  return id.split('=')[1];
}

function getFilmDetailFromFetch(id) {
  const url = `https://ghibliapi.herokuapp.com/films/${id}`;
  const fetchResponse = fetch(url);

  const jsonResponse = fetchResponse
    .then((response) => response.json());

  return jsonResponse;
}

function getFlimListFromUrl() {
  const url = 'https://ghibliapi.herokuapp.com/films/';
  const fetchResponse = fetch(url);
  const jsonResponse = fetchResponse
    .then((response) => response.json());

  return jsonResponse;
}

function getFilmPeopleFromFetch(id) {
  const url = 'https://ghibliapi.herokuapp.com/people/';
  const fetchResponse = fetch(url);

  const jsonResponse = fetchResponse
    .then((response) => response.json());

  return jsonResponse;
}

function printStagePhoto(film) {
  const container = document.querySelector('.stage-photo__container');

  const { title } = film;

  const img = document.createElement('img');
  img.className = 'stage-img';

  for (prop in FILMS) {
    const { background } = FILMS[prop];
    if (title === prop) {
      img.src = background;
    }
  }
  container.appendChild(img);
}

function printTitle(film) {
  const container = document.querySelector('.film-info__container');

  const { title } = film;

  const h1 = document.createElement('h1');
  h1.textContent = title;

  container.appendChild(h1);
}

function printDescription(film) {
  const container = document.querySelector('.film-info__container');

  const { description } = film;

  const p = document.createElement('p');
  p.textContent = description;
  p.className = 'description';

  container.appendChild(p);
}

function printDirector(film) {
  const container = document.querySelector('.film-info__container');

  const { director } = film;

  const p = document.createElement('p');
  p.textContent = 'Directed by ';

  const b = document.createElement('b');
  b.textContent = director;

  p.appendChild(b);
  container.appendChild(p);
}

function printReleaseDateAndProducer(film) {
  const container = document.querySelector('.film-info__container');

  const { release_date, producer } = film;

  const div = document.createElement('div');
  div.className = 'info';

  const p = document.createElement('p');
  p.textContent = 'Year of Production: ';

  const b = document.createElement('b');
  b.textContent = release_date;
  p.className = 'date';

  const pProducer = document.createElement('p');
  pProducer.textContent = 'Produce by ';

  const bProducer = document.createElement('b');
  bProducer.textContent = producer;

  p.appendChild(b);
  pProducer.appendChild(bProducer);
  div.appendChild(p);
  div.appendChild(pProducer);
  container.appendChild(div);
}

function printRtScore(film) {
  const container = document.querySelector('.film-info__container');

  const score = document.createElement('div');
  score.className = 'score';

  const { rt_score } = film;

  const img = document.createElement('img');
  img.className = 're-icon';
  img.src = rt_score > 60? 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg': 'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-rotten.f1ef4f02ce3.svg';

  const p = document.createElement('p');
  p.textContent = `${rt_score}%`;

  score.appendChild(img);
  score.appendChild(p);
  container.appendChild(score);
}

function printCover(film) {
  const container = document.querySelector('.cover__container');

  const { title } = film;

  const img = document.createElement('img');
  img.className = 'cover-img';

  for (prop in FILMS) {
    const { cover } = FILMS[prop];
    if (title === prop) {
      img.src = cover;
    }
  }
  container.appendChild(img);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function printMoreFilm(list) {
  const container = document.querySelector('.more');
  const div = document.createElement('div');
  div.className = 'film-list';

  const num = getRndInteger(1, 15);
  const more = list.splice(num, 5);

  more.forEach((film) => {
    const { id, title, description } = film;

    const aElement = document.createElement('a');
    aElement.href = `../studio-ghibli-detail/studio-ghibli-detail.html?id=${id}`;
    aElement.className = 'card';

    const filmDiv = document.createElement('div');
    filmDiv.className = 'film__container';

    const img = document.createElement('img');
    img.className = 'film-cover';
    for (prop in FILMS) {
      const { cover } = FILMS[prop];
      if (prop === title) {
        img.src = cover;
      }
    }

    aElement.appendChild(img);
    filmDiv.append(aElement);
    div.appendChild(filmDiv);
    container.appendChild(div);
  });
}

function printBtnMoreFilm() {
  const container = document.querySelector('.more');

  const div = document.createElement('div');
  div.className = 'view-all';

  const a = document.createElement('a');
  a.href = '../studio-ghibli/studio-ghibli.html';
  a.textContent = 'View All Films';

  div.appendChild(a);
  container.appendChild(div);
}
