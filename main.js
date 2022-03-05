import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

const url = `${BASE_URL}550?${API_KEY}&${language}`

let idMovie = Math.floor(Math.random() * 1000 + 1)

// console.log(idMovie)

function getMovie() {
  /* console.log(`${BASE_URL}550?${API_KEY}&${language}`) */

  axios
    /* .get(url) */
    .get(`${BASE_URL}${idMovie}?${API_KEY}&${language}`)
    .then(response => {
      const data = response.data
      /* result.textContent = JSON.stringify(data) */
      console.log(response.data)
    })
    .catch(error => console.log(error))
}

getMovie()
