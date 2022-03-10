import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

let idMovie = Math.floor(Math.random() * 1000 + 1)

const div = document.getElementById('result')

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

async function getMovie() {
  try {
    const { data } = await axios(`${BASE_URL}${idMovie}?${API_KEY}&${language}`)
    console.log(data)
    show(data)
  } catch (error) {
    console.log(error)
  }
}
getMovie()

function show(data) {
  result.innerHTML = data.title
}
