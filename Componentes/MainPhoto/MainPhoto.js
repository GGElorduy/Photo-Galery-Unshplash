import './MainPhoto.css'
import { lastQuery } from '../Header/Header'
import { profileinfo } from '../Account/Account'
import { savePic, searchImages } from '../Hero/Hero'

//Variables

//Limpiador de main
export const clearMain = () => {
  document.querySelector('#mainFoto').innerHTML = ''
  document.querySelector('#mainFoto').className = 'mainFotoHide'
}
export let otherRelatedPics
//
export const buildMainImage = (data) => {
  const mainPhoto = document.querySelector('#mainFoto')
  clearMain()
  mainPhoto.classList = 'photoSection'
  const mainDiv = document.createElement('div')
  /*   let otherRelatedPics = data.description
   */
  const backbutton = document.createElement('button')
  const backArrow = document.createElement('img')
  const saveDiv = document.createElement('div')
  const saveSpan = document.createElement('span')

  backArrow.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1715507278/flechas-izquierda_vjff8p.png'

  backbutton.appendChild(backArrow)
  backbutton.className = 'backButton'
  backbutton.addEventListener('click', () => {
    clearMain()
    if (lastQuery == '') {
      searchImages()
    } else {
      searchImages(lastQuery)
    }
  })

  mainDiv.className = 'mainPhotoDiv'
  const photoDiv = document.createElement('div')
  const imgFull = document.createElement('img')
  imgFull.src = data.urls.regular

  mainPhoto.appendChild(mainDiv)
  mainDiv.appendChild(backbutton)
  mainDiv.appendChild(photoDiv)
  mainDiv.appendChild(saveDiv)
  saveDiv.appendChild(saveSpan)
  photoDiv.appendChild(imgFull)

  imgContainer.className = 'imgContainerHide'

  if (profileinfo.savedPhotos.find((save) => save.id === data.id)) {
    saveDiv.className = 'savedBlock'
    saveSpan.textContent = 'Saved'
  } else {
    saveSpan.textContent = 'Save'
    saveDiv.className = 'saveBlock'
  }

  saveDiv.addEventListener('click', () => {
    savePic(data, saveDiv, saveSpan)
    const pepe = document.querySelector('#imgContainer')

    savePic(pepe, saveDiv, saveSpan)
  })
}
