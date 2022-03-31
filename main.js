import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

const button = document.querySelector('button')

const infoMovieContainer = document.getElementById('infoMovie')
const posterMovie = infoMovieContainer.children[0]
const infoMovieTextContainer = infoMovieContainer.children[1]

function getMovie(idMovie) {
  axios
    .get(`${BASE_URL}${idMovie}?${API_KEY}&${language}`)
    .then(response => {
      const data = response.data
      show(data)
    })
    .catch(error => {
      showError()
    })

  infoMovieContainer.classList.add('infoMovieShow')
}

function show(data) {
  posterMovie.src = data.poster_path
    ? `${IMG_URL}${data.poster_path}`
    : './assets/poster_404.png'

  posterMovie.alt = `Poster do filme "${data.title}"`
  infoMovieTextContainer.style.marginTop = '0'
  infoMovieTextContainer.style.marginBottom = '0'
  infoMovieTextContainer.children[0].innerHTML = `${data.title}`

  infoMovieTextContainer.children[1].innerHTML =
    data.overview != '' ? `${data.overview}` : ` indisponível`
}

function showError() {
  posterMovie.src = './assets/poster_404.png'
  posterMovie.alt = 'Poster ERROR 404'
  infoMovieTextContainer.style.marginTop = 'auto'
  infoMovieTextContainer.style.marginBottom = 'auto'
  infoMovieTextContainer.children[0].innerHTML =
    'Ops, hoje não é dia de assistir filme. <br>Bora codar! 🚀'
  infoMovieTextContainer.children[1].innerHTML = ''
}

button.addEventListener('click', () => {
  const idMovie = Math.floor(Math.random() * 100000 + 1)
  getMovie(idMovie)
})
