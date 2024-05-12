import './Hero.css'
import { clearMain, buildMainImage } from '../MainPhoto/MainPhoto'
import { profileinfo } from '../Account/Account'

const API_KEY = 'Z4QI2mAd5tAL0f6adzNFg5UCZR4IsjLWQJW_POdp49k'
export let imgContainer = document.querySelector('#imgContainer')
export const suggestedSearches = document.getElementById('suggestedSearches')
const message = document.getElementById('message')
const photoCategories = [
  'Natural landscapes',
  'Portraits',
  'Urban architecture',
  'Wildlife',
  'Street photography',
  'Macro photography',
  'Travel photography',
  'Food photography',
  'Fashion photography',
  'Sports photography'
]
//Funcion para guardar las fotos en profile
const savePic = (img, boton, span) => {
  if (boton.className === 'save') {
    profileinfo.savedPhotos.push(img)
    boton.className = 'saved'
    span.textContent = 'Saved'
  }
}

// Funcion para sacar un array con elementos aleatorios. (se utiiza para la creacion de botones de sugerencia)
const getRandomElementsFromArray = (array, numElements) => {
  const shuffledArray = array.sort(() => Math.random() - 0.5)
  return shuffledArray.slice(0, numElements)
}

// Función para buscar imágenes
export const searchImages = (query) => {
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length === 0) {
        //Aqui vendría el mensaje de error
        const error = document.createElement('p')
        error.textContent =
          'Lo siento, no se han encontrado ninguna imagen. Por favor, cambie el input o utilice uno de las sugerencias: '
        message.appendChild(error)

        // Aquí puedes proporcionar botones sugeridos basados en las palabras clave más comunes
        let photoCat = getRandomElementsFromArray(photoCategories, 3)
        for (let i = 0; i < photoCat.length; i++) {
          const Suggest = document.createElement('button')
          Suggest.className = 'suggestButton'
          Suggest.textContent = photoCat[i]
          suggestedSearches.appendChild(Suggest)
          Suggest.onclick = () => searchImages(Suggest.textContent)
        }

        imgContainer.innerHTML = ''
      } else {
        message.innerText = ''
        suggestedSearches.innerHTML = ''
        renderImages(data.results)
      }
    })
    .catch((error) => console.error(error))
}
// Función para renderizar las imágenes

export const renderImages = (data) => {
  imgContainer.innerHTML = ''
  data.forEach((image) => {
    const divPic = document.createElement('div')
    const pic = document.createElement('img')
    const saveDiv = document.createElement('div')
    const saveSpan = document.createElement('span')
    const imgContainer = document.querySelector('#imgContainer')

    imgContainer.className = 'imgContainerClass'

    imgContainer.appendChild(divPic)
    divPic.appendChild(pic)
    divPic.appendChild(saveDiv)
    saveDiv.appendChild(saveSpan)

    saveSpan.textContent = 'Save'
    divPic.className = 'item'
    if (profileinfo.savedPhotos.find((save) => save.id === image.id)) {
      saveDiv.className = 'saved'
    } else {
      saveDiv.className = 'save'
    }

    saveDiv.addEventListener('click', () => savePic(image, saveDiv, saveSpan))

    pic.src = image.urls.regular
    pic.alt = image.alt_description

    let imgRatio = image.width / image.height
    let columnas = imgRatio > 1 ? 'span ' + Math.round(imgRatio) : 'span 1'
    divPic.style.gridRow = columnas

    divPic.addEventListener('click', () => buildMainImage(pic.src))
  })
}
// Función para buscar sugerencias

export const searchSuggested = (query) => {
  const searchInput = document.querySelector('#inputSearch')
  searchInput.value = query
  searchImages(query)
}
