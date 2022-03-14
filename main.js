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
