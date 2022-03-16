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
  /* try {
    // const { data } = await axios(`${BASE_URL}${715}?${API_KEY}&${language}`)
    const { data } = await axios(`${BASE_URL}${idMovie}?${API_KEY}&${language}`)

    console.log(`${BASE_URL}${idMovie}?${API_KEY}&${language}`)

    section.classList.toggle('result_show')

    show(data)
  } catch (error) {
    console.log(`ERRADO: ${error.message}`)
    showError()
  } */

  try {
    const { data, status } = await axios(
      `${BASE_URL}${idMovie}?${API_KEY}&${language}`
    )
    section.classList.toggle('result_show')
    show(data)

    console.log(data)
    console.log(status)
  } catch (error) {
    console.log(`ERRADO: ${error.response.status}`)
    showError()
  }
}

function show(data) {
  section.children
  section.children[0].src = `${IMG_URL}${data.poster_path}`
  section.children[0].alt = `Poster do filme "${data.title}"`
  section.children[1].style.marginTop = '0'
  section.children[1].style.marginBottom = '0'
  section.children[1].children[0].innerHTML = `${data.title}`
  section.children[1].children[1].innerHTML = `${data.overview}`
}

function showError() {
  section.children[0].src = './assets/poster_404.png'
  section.children[0].alt = 'Poster ERROR 404'
  section.children[1].children[0].innerHTML =
    'Ops, hoje não é dia de assistir filme. <br>Bora codar! 🚀'
  section.children[1].children[1].innerHTML = ''
  section.children[1].style.marginTop = 'auto'
  section.children[1].style.marginBottom = 'auto'
}

const buttonF = document.querySelector('button')
buttonF.addEventListener('click', function showMovie() {
  const idMovie = Math.floor(Math.random() * 1000 + 1)

  getMovie(idMovie)
})
