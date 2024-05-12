import './MainPhoto.css'

//Limpiador de main
export const clearMain = () => {
  document.querySelector('#mainFoto').innerHTML = ''
  document.querySelector('#mainFoto').className = 'mainFotoHide'
}
export const buildMainImage = (data) => {
  const mainPhoto = document.querySelector('#mainFoto')
  clearMain()
  mainPhoto.classList = 'photoSection'
  const mainDiv = document.createElement('div')

  const backbutton = document.createElement('button')
  const backArrow = document.createElement('img')
  backArrow.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1715507278/flechas-izquierda_vjff8p.png'

  backbutton.appendChild(backArrow)
  backbutton.className = 'backButton'

  backbutton.addEventListener('click', () => {
    clearMain()
    document.querySelector('#imgContainer').className = 'imgContainerClass'
  })

  mainDiv.className = 'mainPhotoDiv'
  const photoDiv = document.createElement('div')
  const imgFull = document.createElement('img')
  imgFull.src = data

  mainPhoto.appendChild(mainDiv)
  mainDiv.appendChild(backbutton)
  mainDiv.appendChild(photoDiv)
  photoDiv.appendChild(imgFull)

  imgContainer.className = 'imgContainerHide'
}
