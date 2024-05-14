import './Account.css'
import { clearMain, buildMainImage } from '../MainPhoto/MainPhoto'

export let profileinfo = {
  Name: 'Account Name',
  ImgUrl:
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077411/Proyecto%20-%20Tienda/assets/img/account_rgupgw.png',
  savedPhotos: []
}

//Renderiza las fotos guardadas
const renderSaves = (data) => {
  for (const image of data) {
    const divPic = document.createElement('div')
    const pic = document.createElement('img')
    const imgContainer = document.querySelector('#saved')

    imgContainer.className = 'savesContainerClass'
    divPic.addEventListener('click', () => buildMainImage(image))

    imgContainer.appendChild(divPic)
    divPic.appendChild(pic)

    divPic.className = 'item'

    pic.src = image.urls.regular
    pic.alt = image.alt_description

    let imgRatio = image.width / image.height
    let columnas = imgRatio > 1 ? 'span ' + Math.round(imgRatio) : 'span 1'
    divPic.style.gridRow = columnas
  }
}
//Esconde la seccion de account
export const hideAccount = () => {
  document.querySelector('#account').className = 'other'
  document.querySelector('#account').innerHTML = ''
}
//Genera la seccion de account
export const openAccount = () => {
  message.innerText = ''
  suggestedSearches.innerHTML = ''
  document.querySelector('#imgContainer').className = 'imgContainerHide'
  clearMain()

  const accountSection = document.querySelector('#account')
  hideAccount()
  accountSection.className = 'accountSectionClass'

  let profilePic = document.createElement('img')

  profilePic.src = profileinfo.ImgUrl

  let profileName = document.createElement('h2')
  profileName.textContent = profileinfo.Name

  const divSaved = document.createElement('div')
  divSaved.id = 'saved'

  accountSection.appendChild(profilePic)
  accountSection.appendChild(profileName)
  accountSection.appendChild(divSaved)

  renderSaves(profileinfo.savedPhotos)
}
