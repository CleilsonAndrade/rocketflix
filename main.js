import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

const section = document.getElementById('result')

/* // Com axios
function getMovie() {
  axios
    .get(`${BASE_URL}${idMovie}?${API_KEY}&${language}`)
    .then(response => {
      // console.log(JSON.stringify(response.data))
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

function getMovie(idMovie) {
  axios
    .get(`${BASE_URL}${idMovie}?${API_KEY}&${language}`)
    .then(response => {
      // console.log(JSON.stringify(response.data))
      const dado = response.data

      if (response.status == 200) {
        console.log('acertou')
        section.classList.toggle('result_show')
        show(dado)
      }

      if (response.status != 200) {
        console.log('errou')
        showError()
        section.classList.toggle('result_show')
      }
    })
    .catch(function (error) {
      console.log(error.response.data)
      console.log(error.response.status)
    })
}

function show(data) {
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

function showClean() {
  section.children[0].src = ''
  section.children[0].alt = ''
  section.children[1].children[0].innerHTML = ''
  section.children[1].children[1].innerHTML = ''
  section.children[1].style.marginTop = 'auto'
  section.children[1].style.marginBottom = 'auto'
}

const buttonF = document.querySelector('button')
buttonF.addEventListener('click', function () {
  const idMovie = Math.floor(Math.random() * 1000 + 1)

  getMovie(idMovie)
})
