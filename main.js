import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

const section = document.getElementById('result')

/* // Com axios
function getMovie() {
  axios
    .get(`${BASE_URL}${idMovie}?${API_KEY}&${language}`)
    .then(response => {
      console.log(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
} */

// Com FETCH
/* async function getMovie() {
  try {
    const response = await fetch(`${BASE_URL}${idMovie}?${API_KEY}&${language}`)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
} */

// idMovieErrorPoster => 695 https://api.themoviedb.org/3/movie/394?api_key=fcf15195836575299563d6ade8827f77&language=pt-BR

/* xhr.js:210          GET https://api.themoviedb.org/3/movie/715?api_key=fcf15195836575299563d6ade8827f77&language=pt-BR 404
(anônimo) @ xhr.js:210
e.exports @ xhr.js:15
e.exports @ dispatchRequest.js:56
f.request @ Axios.js:108
(anônimo) @ bind.js:9
getMovie @ main.js:30
showMovie @ main.js:52
main.js:36 ERRO ENCONTRADOError: Request failed with status code 404 */

async function getMovie(idMovie) {
  try {
    const { data } = await axios(`${BASE_URL}${idMovie}?${API_KEY}&${language}`)
    console.log(`${BASE_URL}${idMovie}?${API_KEY}&${language}`)
    console.log(data)
    section.classList.toggle('result_show')
    show(data)
  } catch (error) {
    console.log(`ERRO ENCONTRADO${error}`)
  }
}

function show(data) {
  console.log(section.children)
  console.log((section.children[0].src = `${IMG_URL}${data.poster_path}`))
  console.log((section.children[0].alt = `Poster do filme "${data.title}"`))
  console.log((section.children[1].children[0].innerHTML = `${data.title}`))
  console.log((section.children[1].children[1].innerHTML = `${data.overview}`))
}

const buttonF = document.querySelector('button')
buttonF.addEventListener('click', function showMovie() {
  const idMovie = Math.floor(Math.random() * 1000 + 1)

  getMovie(idMovie)
})
